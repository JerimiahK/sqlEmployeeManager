INSERT INTO department (name) VALUES
("Software Development"),
("Accounting"),
("Testing"),
("Sales");

INSERT INTO role (title, salary, department_id) VALUES
("Lead Developer", 125000, 1),
("Senior Software Developer", 95000, 1),
("Accounting Manager", 115000, 2),
("Accountant", 75000, 2),
("Testing Manager", 120000, 3),
("Testing Engineer", 100000, 3),
("Sales Manager", 90000, 4),
("Sales Team", 60000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("John", "Doe", 1, null),
("Carl", "Smith", 2, 1),
("Jeff", "Goldblum", 3, null),
("Harvey", "Stevenson", 4, 3),
("Steph", "Boyardee", 5, null),
("Bumble", "Foot", 6, 5,),
("Lewis", "Clark", 7, null),
("Cliff", "Burtanos", 8, 7);
