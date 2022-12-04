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
      console.log(answers.choices);
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
            console.log("selected");
            viewEmployees();
          }
        case answers.choices:
          if (answers.choices === "Add a department") {
            console.log("selected");
            addDepartment();
          }
        case answers.choices:
          if (answers.choices === "Add a role") {
            console.log("selected");
            addRole();
          }
        case answers.choices:
          if (answers.choices === "Add an employee") {
            console.log("selected");
            addEmployee();
          }
        case answers.choices:
          if (answers.choices === "Update employee role") {
            console.log("selected");
            updateEmployee();
          }
        case answers.choices:
          if (answers.choices === "Done with selections") {
            console.log("selected");
            return;
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
  db.query(
    `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, employee.manager_id
FROM employee
RIGHT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.department_id = department.id`,
    function (err, results) {
      console.table(results);
      console.log("-----What would you like to do next?-----\n");
      initalize();
    }
  );
};

const addDepartment = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please add the name of the new department.",
      },
      {
        type: "input",
        name: "id",
        message: "Please add the id of the new department.",
      },
    ])
    .then((answer) => {
      console.log(answer.name);
      db.query(
        `INSERT INTO department(name, id) VALUES ("${answer.name}", ${answer.id});`,
        function (err, results) {
          console.table(results);
          console.log("-----What would you like to do next?-----\n");
          initalize();
        }
      );
    });
};

const addRole = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of the new position?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the starting salary of the new position?",
      },
      {
        type: "input",
        name: "department_id",
        message: "What is the department id for this position?",
      },
    ])
    .then((answer) => {
      db.query(
        `INSERT INTO role(title, salary, department_id) VALUES ("${answer.title}", ${answer.salary}, ${answer.department_id});`,
        function (err, results) {
          console.table(results);
          console.log("-----What would you like to do next?-----\n");
          initalize();
        }
      );
    });
};

const addEmployee = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the first name of the new employee?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the last name of the new employee?",
      },
      {
        type: "input",
        name: "role_id",
        message: "What is the role id for this position?",
      },
      {
        type: "input",
        name: "manager_id",
        message:
          "What is the employee's manager's id for this position? (Null if none).",
      },
    ])
    .then((answer) => {
      db.query(
        `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
        ("${answer.first_name}", "${answer.last_name}", ${answer.role_id}, ${answer.manager_id});`,
        function (err, results) {
          console.table(results);
          console.log("-----What would you like to do next?-----\n");
          initalize();
        }
      );
    });
};

const updateEmployee = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message:
          "What is the first name of the employee whose role you would like to update?",
      },
      {
        type: "input",
        name: "role_id",
        message: "What is the new role id you would like the employee to have?",
      },
    ])
    .then((answers) => {
      console.log(answers.role_id, answers.first_name);
      db.query(
        `UPDATE employee SET role_id = ${answers.role_id} WHERE first_name = "${answers.first_name}";`,
        function (err, results) {
          console.table(results);
          console.log("-----What would you like to do next?-----\n");
          initalize();
        }
      );
    });
};