const express = require("express");
const app = express();
const cors = require("cors");
const cacheRouter = require("./src/router/cacheRouter");

app.use(express.json());
app.use(cors());
app.use('/cache', cacheRouter);


module.exports = app;