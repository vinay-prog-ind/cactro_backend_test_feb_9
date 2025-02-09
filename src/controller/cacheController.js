const CacheModel = require("../models/cacheModel");
const constants = require("../constants/constants");


const cache = new CacheModel(constants.MAX_CACHE_SIZE);

exports.getCache = async (req, res, next) => {
    try {
        const {key} = req.params;
        console.log(`Key: ${key}`);
        const value = await cache.get(key);
        res.status(200).json({status: "success", data: {key, value}});
    }
    catch (err) {
        res.status(500).json({error: {error: "Internal Server Error", details: err.message}});
    }
    next();
}

exports.createCache = async (req, res, next) => {
    try {
        const {key, value} = req.body;
        await cache.set(key, value);
        res.status(200).json({status: "success", data: "successfully create"})
    }
    catch (err) {
        res.status(500).json({error: {error: "Internal Server Error", details: err.message}});
        console.log(err);
    }
    next();
}

exports.deleteCache = async (req, res, next) => {
    try {
        const {key} = req.params;
        await cache.delete(key)
        res.status(200).json({status: "success", data: "successfully deleted"});
    }
    catch (err) {
        res.status(500).json({error: {error: "Internal Server Error", details: err.message}});
    }
    next();
}