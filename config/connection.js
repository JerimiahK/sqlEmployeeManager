const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "R3nn@srequest",
  database: "employee_tracker",
});

module.exports = db;

