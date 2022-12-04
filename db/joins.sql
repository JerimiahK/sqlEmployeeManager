-- Used this file to create the joins more cohesively for the query functions in the index.js file.

-- Creates the 'view all roles' table query
SELECT role.title, role.id, role.salary, department.name FROM role
JOIN department ON role.department_id = department.id

--Creates the 'view all employees' table query
SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, employee.manager_id
FROM employee
RIGHT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.department_id = department.id