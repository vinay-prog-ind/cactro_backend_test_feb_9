const cacheController = require('../controller/cacheController');

const express = require("express");

const router = express.Router();

router.route('/').post(cacheController.createCache);
router.route('/:key').get(cacheController.getCache).delete(cacheController.deleteCache);

module.exports = router;