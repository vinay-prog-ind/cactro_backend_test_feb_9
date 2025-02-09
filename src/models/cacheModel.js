class CacheModel {
    constructor(maxSize) {
        this.cache = new Map();
        this.size = maxSize;
    }

    set(key, value){
        if(this.cache.size >= this.size) {
            throw new Error('Storage Full, Cannot add Item :/');
        }
        this.cache.set(key, value);
    }

    get(key) {
        const value = this.cache.get(key);
        if (value === undefined) {
          throw new Error('Key not found in cache');
        }
        return value;
    }

    delete(key) {
        const deleted = this.cache.delete(key);
        if (!deleted) {
          throw new Error('Key not found in cache');
        }
    }

}

module.exports = CacheModel;