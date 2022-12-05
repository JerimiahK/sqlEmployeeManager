-- Used this file to create the joins more cohesively for the query functions in the index.js file.

-- Creates the 'view all roles' table query
SELECT role.title, role.id, role.salary, department.name FROM role
JOIN department ON role.department_id = department.id

--Creates the 'view all employees' table query
SELECT employee.id, employee.first_name, employee.last_name, employee.role_id,role.title as Title, department.name AS Department, role.salary as Salary, CONCAT(manager.first_name, " ",manager.last_name) AS Manager
FROM role
JOIN employee ON role.id = employee.role_id
LEFT JOIN employee manager ON employee.manager_id = manager.id
JOIN department ON department.id = role.department_id;