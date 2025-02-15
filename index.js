const express = require("express");
const app = express();
const cors = require("cors");
const cacheRouter = require("./src/router/cacheRouter");

app.use(express.json());
app.use(cors());
app.use(cors({ origin: "http://localhost:5173" })); 
app.use('/cache', cacheRouter);


module.exports = app;