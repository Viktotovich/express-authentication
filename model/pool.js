require("dotenv").config();

const http = require("http");
const { neon } = require("@neondatabase/serverless");

const sql = neon(process.env.DATABASE_URL);

module.exports = sql;
