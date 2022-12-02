const inquirer = require("inquirer");
const consoleTable = require("console.table");
const db = require("./config/connection");

// Console log a "Connected!" message if there is a successful connection to the database.
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  initalize();
});

// Display a Welcome Message with ascii art
console.table("-----Welcome to Employee Tracker-----");

// Use inquirer to ask initial questions. View departments, view roles, view employees, add department, add role, add employee, update employee.
const initalize = async () => {
  inquirer.prompt([
    {
      type: "list",
      name: "choices",
      message: "Please choose from the following options.",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update employee role",
      ],
    },
  ]);
};
// Use switch statements to call view/add functions depending on user selection

// Make functions for each of the 7 choices.

// db.query("SELECT * FROM department", function (err, results) {
//   console.table(results);
// });

// db.query("SELECT * FROM role", function (err, results) {
//   console.table(results);
// });

// db.query("SELECT * FROM employee", function (err, results) {
//   console.table(results);
// });
