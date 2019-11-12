const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const KnexSessionStorage = require("connect-session-knex")(session);
const morgan = require("morgan");

const knexConnection = require("../data/dbConfig");

const sessionConfig = {
  name: "auth",
  secret: process.env.COOKIE_SECRET || "secret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: process.env.NODE_ENV !== "development",
    httpOnly: true
  },
  store: new KnexSessionStorage({
    knex: knexConnection,
    clearInterval: 1000 * 60 * 10,
    createtable: true,
    tablename: "userSessions",
    sidfieldname: "id"
  })
};

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(cors());
  server.use(session(sessionConfig));
  server.use(morgan("dev"));
};
