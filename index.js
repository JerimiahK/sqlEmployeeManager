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
  inquirer
    .prompt([
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
          "Done with selections",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.choices) {
        case answers.choices:
          if (answers.choices === "View all departments") {
            viewDepartments();
          }
        case answers.choices:
          if (answers.choices === "View all roles") {
            viewRoles();
          }
        case answers.choices:
          if (answers.choices === "View all employees") {
            viewEmployees();
          }
          break;
      }
    });
};

// FUNCTIONS FOR ALL SQL QUERIES
const viewDepartments = function () {
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
    console.log("-----What would you like to do next?-----\n");
    initalize();
  });
};

// join department table with role table to show what department the role belongs to
const viewRoles = function () {
  db.query(
    `SELECT role.title, role.id, role.salary, department.name FROM role
JOIN department ON role.department_id = department.id`,
    function (err, results) {
      console.table(results);
      console.log("-----What would you like to do next?-----\n");
      initalize();
    }
  );
};

const viewEmployees = function () {
  db.query("SELECT * FROM employee", function (err, results) {
    console.table(results);
    console.log("-----What would you like to do next?-----\n");
    initalize();
  });
};
