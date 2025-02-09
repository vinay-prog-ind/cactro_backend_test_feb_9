const express = require("express");
const app = express();
const cacheRouter = require("./src/router/cacheRouter");

app.use(express.json());
app.use('/cache', cacheRouter);


module.exports = app;