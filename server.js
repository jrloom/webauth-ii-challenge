const express = require("express");

const apiRouter = require("./routes/api");
const middleware = require("./middleware/global");

const server = express();

middleware(server);

server.use("/api", apiRouter);

module.exports = server;
