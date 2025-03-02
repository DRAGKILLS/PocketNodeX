const DataPacket = require("./DataPacket");
const ProtocolInfo = require("../Info");

class BlockEventPacket extends DataPacket {
    static getId() {
        return ProtocolInfo.BLOCK_EVENT_PACKET;
    }

    initVars(){
        this.x = -1;
        this.y = -1;
        this.z = -1;
        this.eventType = -1;
        this.eventData = -1;
    }

    constructor(){
        super();
        this.initVars();
    }

    _decodePayload() {
        this.getBlockPosition(this.x, this.y, this.z);
        this.eventType = this.readVarInt();
        this.eventData = this.readVarInt();
    }

    _encodePayload() {
        this.writeBlockPosition(this.x, this.y, this.z);
        this.writeVarInt(this.eventType);
        this.writeVarInt(this.eventData);
    }

    handle(session) {
        return session.handleBlockEvent(this);
    }
}

module.exports = BlockEventPacket;