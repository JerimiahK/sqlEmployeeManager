const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "R3nn@srequest",
  database: "employee_tracker",
});
console.log(db);

db.query("SELECT * FROM roles", function (err, results) {
  console.log(results);
});
