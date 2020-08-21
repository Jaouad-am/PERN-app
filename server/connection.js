const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "root",
  database: "pernapp",
  port: 5432,
});

module.exports = pool;
