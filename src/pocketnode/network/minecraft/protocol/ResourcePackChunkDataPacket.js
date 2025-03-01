const DataPacket = require("./DataPacket");
const ProtocolInfo = require("../Info");

class ResourcePackChunkDataPacket extends DataPacket {
    static getId(){
        return ProtocolInfo.RESOURCE_PACK_CHUNK_DATA_PACKET;
    }

    initVars(){
        this.packId = "";
        this.chunkIndex = 0;
        this.progress = 0;
        this.data = null;
    }

    constructor(){
        super();
        this.initVars();
    }

    _decodePayload(){
        this.packId = this.readString();
        this.chunkIndex = this.readLInt();
        this.progress = this.readLLong();
        this.data = this.read(this.readLInt());
    }

    _encodePayload(){
        this.writeString(this.packId);
        this.writeLInt(this.chunkIndex);
        this.writeLLong(this.progress);
        this.writeLInt(this.data.length);
        this.append(this.data);
    }
}

module.exports = ResourcePackChunkDataPacket;