const DataPacket = require("./DataPacket");
const ProtocolInfo = require("../Info");

class UpdateAttributesPacket extends DataPacket {
    static getId() {
        return ProtocolInfo.UPDATE_ATTRIBUTES_PACKET;
    }

    initVars(){
        this.entityRuntimeId = -1;
        this.entries = [];
    }

    _decodePayload() {
        console.log("UpdateAttributesPacket called!");

        this.entityRuntimeId = this.getEntityRuntimeId();
        this.entries = this.readAttributeList();
    }

    _encodePayload() {
        this.writeEntityRuntimeId(this.entityRuntimeId);
        this.writeAttributeList(this.entries);
    }

    handle(session) {
        return session.handleUpdateAttributes(this);
    }
}

module.exports = UpdateAttributesPacket;