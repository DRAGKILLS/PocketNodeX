const Info = {};

Info.PROTOCOL = 361;
Info.VERSION = "1.12.1";

Info.LOGIN_PACKET = 0x01;
Info.PLAY_STATUS_PACKET = 0x02;
Info.SERVER_TO_CLIENT_HANDSHAKE_PACKET = 0x03;
Info.CLIENT_TO_SERVER_HANDSHAKE_PACKET = 0x04;
Info.DISCONNECT_PACKET = 0x05;
Info.RESOURCE_PACKS_INFO_PACKET = 0x06;
Info.RESOURCE_PACK_STACK_PACKET = 0x07;
Info.RESOURCE_PACK_CLIENT_RESPONSE_PACKET = 0x08;
Info.TEXT_PACKET = 0x09;
Info.SET_TIME_PACKET = 0x0a;
Info.START_GAME_PACKET = 0x0b;
Info.ADD_PLAYER_PACKET = 0x0c;
Info.ADD_ENTITY_PACKET = 0x0d;
Info.REMOVE_ENTITY_PACKET = 0x0e;
Info.ADD_ITEM_ENTITY_PACKET = 0x0f;

Info.TAKE_ITEM_ENTITY_PACKET = 0x11;
Info.MOVE_ENTITY_PACKET = 0x12;
Info.MOVE_PLAYER_PACKET = 0x13;
Info.RIDER_JUMP_PACKET = 0x14;
Info.UPDATE_BLOCK_PACKET = 0x15;
Info.ADD_PAINTING_PACKET = 0x16;
Info.EXPLODE_PACKET = 0x17;
Info.LEVEL_SOUND_EVENT_PACKET = 0x18;
Info.LEVEL_EVENT_PACKET = 0x19;
Info.BLOCK_EVENT_PACKET = 0x1a;
Info.ENTITY_EVENT_PACKET = 0x1b;
Info.MOB_EFFECT_PACKET = 0x1c;
Info.UPDATE_ATTRIBUTES_PACKET = 0x1d;
Info.INVENTORY_TRANSACTION_PACKET = 0x1e;
Info.MOB_EQUIPMENT_PACKET = 0x1f;
Info.MOB_ARMOR_EQUIPMENT_PACKET = 0x20;
Info.INTERACT_PACKET = 0x21;
Info.BLOCK_PICK_REQUEST_PACKET = 0x22;
Info.ENTITY_PICK_REQUEST_PACKET = 0x23;
Info.PLAYER_ACTION_PACKET = 0x24;
Info.ENTITY_FALL_PACKET = 0x25;
Info.HURT_ARMOR_PACKET = 0x26;
Info.SET_ENTITY_DATA_PACKET = 0x27;
Info.SET_ENTITY_MOTION_PACKET = 0x28;
Info.SET_ENTITY_LINK_PACKET = 0x29;
Info.SET_HEALTH_PACKET = 0x2a;
Info.SET_SPAWN_POSITION_PACKET = 0x2b;
Info.ANIMATE_PACKET = 0x2c;
Info.RESPAWN_PACKET = 0x2d;
Info.CONTAINER_OPEN_PACKET = 0x2e;
Info.CONTAINER_CLOSE_PACKET = 0x2f;
Info.PLAYER_HOTBAR_PACKET = 0x30;
Info.INVENTORY_CONTENT_PACKET = 0x31;
Info.INVENTORY_SLOT_PACKET = 0x32;
Info.CONTAINER_SET_DATA_PACKET = 0x33;
Info.CRAFTING_DATA_PACKET = 0x34;
Info.CRAFTING_EVENT_PACKET = 0x35;
Info.GUI_DATA_PICK_ITEM_PACKET = 0x36;
Info.ADVENTURE_SETTINGS_PACKET = 0x37;
Info.BLOCK_ENTITY_DATA_PACKET = 0x38;
Info.PLAYER_INPUT_PACKET = 0x39;
Info.FULL_CHUNK_DATA_PACKET = 0x3a;
Info.SET_COMMANDS_ENABLED_PACKET = 0x3b;
Info.SET_DIFFICULTY_PACKET = 0x3c;
Info.CHANGE_DIMENSION_PACKET = 0x3d;
Info.SET_PLAYER_GAME_TYPE_PACKET = 0x3e;
Info.PLAYER_LIST_PACKET = 0x3f;
Info.SIMPLE_EVENT_PACKET = 0x40;
Info.EVENT_PACKET = 0x41;
Info.SPAWN_EXPERIENCE_ORB_PACKET = 0x42;
Info.CLIENTBOUND_MAP_ITEM_DATA_PACKET = 0x43;
Info.MAP_INFO_REQUEST_PACKET = 0x44;
Info.REQUEST_CHUNK_RADIUS_PACKET = 0x45;
Info.CHUNK_RADIUS_UPDATED_PACKET = 0x46;
Info.ITEM_FRAME_DROP_ITEM_PACKET = 0x47;
Info.GAME_RULES_CHANGED_PACKET = 0x48;
Info.CAMERA_PACKET = 0x49;
Info.BOSS_EVENT_PACKET = 0x4a;
Info.SHOW_CREDITS_PACKET = 0x4b;
Info.AVAILABLE_COMMANDS_PACKET = 0x4c;
Info.COMMAND_REQUEST_PACKET = 0x4d;
Info.COMMAND_BLOCK_UPDATE_PACKET = 0x4e;
Info.COMMAND_OUTPUT_PACKET = 0x4f;
Info.UPDATE_TRADE_PACKET = 0x50;
Info.UPDATE_EQUIP_PACKET = 0x51;
Info.RESOURCE_PACK_DATA_INFO_PACKET = 0x52;
Info.RESOURCE_PACK_CHUNK_DATA_PACKET = 0x53;
Info.RESOURCE_PACK_CHUNK_REQUEST_PACKET = 0x54;
Info.TRANSFER_PACKET = 0x55;
Info.PLAY_SOUND_PACKET = 0x56;
Info.STOP_SOUND_PACKET = 0x57;
Info.SET_TITLE_PACKET = 0x58;
Info.ADD_BEHAVIOR_TREE_PACKET = 0x59;
Info.STRUCTURE_BLOCK_UPDATE_PACKET = 0x5a;
Info.SHOW_STORE_OFFER_PACKET = 0x5b;
Info.PURCHASE_RECEIPT_PACKET = 0x5c;
Info.PLAYER_SKIN_PACKET = 0x5d;
Info.SUB_CLIENT_LOGIN_PACKET = 0x5e;
Info.W_S_CONNECT_PACKET = 0x5f;
Info.SET_LAST_HURT_BY_PACKET = 0x60;
Info.BOOK_EDIT_PACKET = 0x61;
Info.NPC_REQUEST_PACKET = 0x62;
Info.PHOTO_TRANSFER_PACKET = 0x63;
Info.MODAL_FORM_REQUEST_PACKET = 0x64;
Info.MODAL_FORM_RESPONSE_PACKET = 0x65;
Info.SERVER_SETTINGS_REQUEST_PACKET = 0x66;
Info.SERVER_SETTINGS_RESPONSE_PACKET = 0x67;
Info.SHOW_PROFILE_PACKET = 0x68;
Info.SET_DEFAULT_GAME_TYPE_PACKET = 0x69;
Info.SET_SCOREBOARD_IDENTITY_PACKET = 0x70;
Info.SET_LOCAL_PLAYER_AS_INITIALIZED_PACKET = 0x71;
Info.UPDATE_SOFT_ENUM_PACKET = 0x72;
Info.NETWORK_STACK_LATENCY_PACKET = 0x73;

Info.SCRIPT_CUSTOM_EVENT_PACKET = 0x75;
Info.SPAWN_PARTICLE_EFFECT_PACKET = 0x76;
Info.AVAILABLE_ENTITY_IDENTIFIERS_PACKET = 0x77;
Info.LEVEL_SOUND_EVENT_PACKET_V2 = 0x78;
Info.NETWORK_CHUNK_PUBLISHER_UPDATE_PACKET = 0x79;
Info.BIOME_DEFINITION_LIST_PACKET = 0x7a;
Info.LEVEL_SOUND_EVENT_PACKET = 0x7b;
Info.LECTERN_UPDATE_PACKET = 0x7c;
Info.VIDEO_STREAM_CONNECT_PACKET = 0x7d;
Info.MAP_CREATE_LOCKED_COPY_PACKET = 0x7e;
Info.ON_SCREEN_TEXTURE_ANIMATION_PACKET = 0x7f;

module.exports = Info;
