#! /usr/bin/env node
const { Client } = require("pg");
require("dotenv").config();

const query = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR ( 255 ),
        password VARCHAR ( 255 )
    )
`;

async function start() {
  console.log("seeding");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();
  await client.query(query);
  await client.end();
  console.log("done");
}

start();
