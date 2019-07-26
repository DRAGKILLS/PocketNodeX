const DataPacket = require("./DataPacket");
const MinecraftInfo = require("../Info");

class FullChunkDataPacket extends DataPacket {
    static getId(){
        return MinecraftInfo.FULL_CHUNK_DATA_PACKET;
    }

    initVars(){
        this.chunkX = 0;
        this.chunkZ = 0;
        this.data = null;
    }

    constructor(){
        super();
        this.initVars();
    }

    _decodePayload(){
        this.chunkX = this.readVarInt();
        this.chunkZ = this.readVarInt();
        this.data = this.read(this.readUnsignedVarInt());
    }

    _encodePayload(){
        this.writeVarInt(this.chunkX)
            .writeVarInt(this.chunkZ)
            .writeUnsignedVarInt(this.data.length)
            .append(this.data);
    }
}

module.exports = FullChunkDataPacket;