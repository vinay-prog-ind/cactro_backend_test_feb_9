exports.getCache = async (req, res, next) => {
    try {
        res.status(200).json({status: "success", data: "getCache"});
    }
    catch (err) {
        res.status(500).json({error: {error: "Internal Server Error", details: err.message}});
    }
    next();
}

exports.createCache = async (req, res, next) => {
    try {
        res.status(201).json({status: "success", data: "getCache"});
    }
    catch (err) {
        res.status(500).json({error: {error: "Internal Server Error", details: err.message}});
    }
    next();
}

exports.deleteCache = async (req, res, next) => {
    try {
        res.status(200).json({status: "success", data: "getCache"});
    }
    catch (err) {
        res.status(500).json({error: {error: "Internal Server Error", details: err.message}});
    }
    next();
}