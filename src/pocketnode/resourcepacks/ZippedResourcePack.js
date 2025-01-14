const ResourcePack = require("../resourcepacks/ResourcePack");
const SFS = require("../utils/SimpleFileSystem");
const HashFile = require("../utils/methods/HashFile");
const AdmZip = require("adm-zip");

class ZippedResourcePack extends ResourcePack {
    initVars(){
        this._path = "";
        this._data = null;
        this._manifest = {};
        this._sha256 = null;
    }

    constructor(zipPath){
        super();
        this.initVars();

        this._path = zipPath;

        if(!SFS.fileExists(zipPath)){
            throw new Error("Couldn't open "+zipPath+": file not found");
        }

        let zip;

        try{
            zip = new AdmZip(zipPath);
        }catch(e){
            throw new Error("Error opening resource pack: "+zipPath);
        }

        let manifest;

        if((manifest = zip.readFile("manifest.json")) === null){
            throw new Error("Could not load resource pack from "+zipPath+": manifest.json not found in the archive root");
        }

        this._data = SFS.readFile(zipPath);

        zip = null;

        manifest = JSON.parse(manifest.toString());
        if(!ZippedResourcePack.validManifest(manifest)){
            throw new Error("Could not load resource pack from "+zipPath+": manifest.json is invalid or incomplete");
        }

        this._manifest = manifest;
    }

    getPackName(){
        return this._manifest.header.name;
    }

    getPackVersion(){
        return this._manifest.header.version.join(".");
    }

    getPackId(){
        return this._manifest.header.uuid;
    }

    getPackSize(){
        return SFS.getFileSize(this._path);
    }

    getSha256(cached = true){
        if(this._sha256 === null || !cached){
            this._sha256 = HashFile("sha256", this._path);
        }

        return this._sha256;
    }

    getPackChunk(start, end){
        return this._data.slice(start, start + end);
    }

    static validManifest(manifest){
        if(!manifest.format_version || !manifest.header || !manifest.modules){
            return false;
        }

        return manifest.header.description &&
               manifest.header.name &&
               manifest.header.uuid &&
               manifest.header.version &&
               manifest.header.version.length === 3;
    }
}

module.exports = ZippedResourcePack;
