const knex = require("knex");

const config = require("../knexfile");

const environment = process.env.NODE_ENV || "development";

module.exports = knex(config[environment]);

// todo Look into what 'environment' is doing because...
// ? eslint/security throws warning: detect-object-injection
