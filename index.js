const inquirer = require("inquirer");
const mysql = require("mysql");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "R3nn@srequest",
    database: "employee_tracker",
  },
  console.log(`Connected to the classlist_db database.`)
);
