const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");

// instantiates a connection to sql database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "R3nn@srequest",
  database: "employee_tracker",
});
console.log(db);

// 
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  initalize()
});

// Display a Welcome Message with ascii art
console.table("-----Welcome to Employee Tracker-----");


// Use inquirer to ask initial questions. View departments, view roles, view employees, add department, add role, add employee, update employee.
const initalize = async () => {
  
}

// Use switch statements to call view/add functions depending on user selection

// Make functions for each of the 7 choices.

db.query("SELECT * FROM department", function (err, results) {
  console.table(results);
});

db.query("SELECT * FROM role", function (err, results) {
  console.table(results);
});

db.query("SELECT * FROM employee", function (err, results) {
  console.table(results);
});
