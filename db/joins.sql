-- Creates the 'view all roles' table query
SELECT role.title, role.id, role.salary, department.name FROM role
JOIN department ON role.department_id = department.id

--