INSERT INTO department(name)
VALUES 
    ('SALES'), 
    ('ENGINEERING'), 
    ('FINANCE'), 
    ('LEGAL');

INSERT INTO roles(title, salary, department_id)
VALUES 
    ('Salesperson', 80000.00, 1),
    ('Lead Engineer', 150000.00, 2),
    ('Software Engineer', 120000.00, 2),
    ('Account Manager', 160000.00, 3),
    ('Accountant', 125000.00, 3),
    ('Legal Team Lead', 250000.00, 4),
    ('Lawyer', 190000.00, 4),
    ('Owner', 350000.00, NULL)
;

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES 
    ('Taylor', 'Vaughn', 8, NULL),
    ('Mike', 'Chan', 1, 1),
    ('Ashley', 'Rodriguez', 2, 1),
    ('Kevin', 'Tupik', 3, 3),
    ('Kunal', 'Singh', 4, 1),
    ('Malia', 'Brown', 5, 5),
    ('Sarah', 'Lourd', 6, 1),
    ('Tom', 'Allen', 7, 7),
    ('Jared', 'Vaughn', 8, NULL)
;