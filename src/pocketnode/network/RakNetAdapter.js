const RakNetServer = require("../../raknet/server/RakNetServer");

const Logger = require("../logger/Logger");

const PacketPool = require("./minecraft/protocol/PacketPool");
const BatchPacket = require("./minecraft/protocol/BatchPacket");

const Player = require("../player/Player");
const PlayerList = require("../player/PlayerList");

class RakNetAdapter {
    constructor(server){
        this.server = server;
        this.raknet = new RakNetServer(server.getPort(), new Logger("RakNet").setDebugging(server._debuggingLevel));
        this.raknet.getServerName()
            .setServerId(server.getServerId())
            .setMotd(server.getMotd())
            .setName(server.getName())
            .setProtocol(server.getProtocol())
            .setVersion(server.getVersion())
            .setOnlinePlayers(server.getOnlinePlayerCount())
            .setMaxPlayers(server.getMaxPlayers())
            .setGamemode(server.getGamemode() >= 1 ? "Creative" : "Survival"); //todo fix this later
        this.packetPool = new PacketPool();
        this.logger = server.getLogger();
        this.players = new PlayerList();
    }

    setName(name){
        this.raknet.getServerName().setMotd(name);
    }

    sendPacket(player, packet, needACK, immediate){
        if(this.players.hasPlayer(player)){
            let identifier = this.players.getPlayerIdentifier(player);

            if(packet instanceof BatchPacket){
                let session;
                if((session = this.raknet.getSessionManager().getSessionByIdentifier(identifier))){
                    session.queueConnectedPacketFromServer(packet, needACK, immediate);
                }
                return null;
            }else{
                this.server.batchPackets([player], [packet], true, immediate);
                //this.logger.debugExtensive("Sending "+packet.getName()+":", packet.buffer);
            }
        }
    }

    tick(){
        this.raknet.getSessionManager().readOutgoingMessages().forEach(message => this._handleIncomingMessage(message.purpose, message.data));

        this.raknet.getSessionManager().getSessions().forEach(session => {
            let player = this.players.getPlayer(session.toString());

            session.packetBatches.getAllAndClear().forEach(packet => {
                let batch = new BatchPacket();
                //batch.setBuffer(packet.getStream().getBuffer());
                batch.setBuffer(packet.getStream().getBuffer(), 1);
                batch.decode();
                batch.handle(player.getSessionAdapter(), this.logger);
            });
        });
    }

    close(player, reason = "unknown reason"){
        if(this.players.hasPlayer(player._ip + ":" + player._port)){
            this.raknet.getSessionManager().removeSession(this.raknet.getSessionManager().getSession(player._ip, player._port), reason);
            this.players.removePlayer(player._ip + ":" + player._port);
        }
    }

    shutdown(){
        this.raknet.shutdown();
    }

    _handleIncomingMessage(purpose, data){
        switch(purpose){
            case "openSession":
                let player = new Player(this.server, data.clientId, data.ip, data.port);
                this.players.addPlayer(data.identifier, player);
                this.server.getPlayerList().addPlayer(data.identifier, player);
                break;

            case "closeSession":
                if(this.players.has(data.identifier)){
                    let player = this.players.get(data.identifier);
                    player.close(player.getLeaveMessage(), data.reason);
                }
                break;//
        }
    }
}

module.exports = RakNetAdapter;