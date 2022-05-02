const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');

// connect to database
db.connect(err => {
    if (err) throw err;
    // start options
    options();
});

const options = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'intro',
            choices: [
                'VIEW ALL DEPARTMENTS',
                'VIEW ALL ROLES',
                'VIEW ALL EMPLOYEES',
                'ADD A DEPARTMENT',
                'ADD A ROLE',
                'ADD AN EMPLOYEE',
                'UPDATE EMPLOYEE ROLE',
                'QUIT'
            ],
            message: 'What would you like to do?'
        }
    ]).then((answers) => {
        switch (answers.intro) {
            case 'VIEW ALL DEPARTMENTS':
                viewDepartments();
                break;
            case 'VIEW ALL ROLES':
                viewRoles();
                break;
            case 'VIEW ALL EMPLOYEES':
                viewEmployees();
                break;
            case 'ADD A DEPARTMENT':
                addDepartment();
                break;
            case 'ADD A ROLE':
                addRole();
                break;
            case 'ADD AN EMPLOYEE':
                addEmployee();
                break;
            case 'UPDATE EMPLOYEE ROLE':
                updateRole();
                break;
            case 'QUIT':
                quit();
                break;
        }
    })
};

const viewDepartments = () => {
    console.log('Viewing all departments.');
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, results) => {
        if (err) throw err;
        console.table(results);
        options();
    });
};
const viewRoles = () => {
    console.log('Viewing all roles');
    const sql = `SELECT roles.*, department.id
                AS department_id
                FROM roles
                LEFT JOIN department
                ON roles.department_id = department.id`;

    db.query(sql, (err, results) => {
        if (err) throw err;
        console.table(results);
        options();
     });
 };
const viewEmployees = () => {
    console.log('Viewing all employees');
    const sql = `SELECT employees.*, `; //Still needs work - needs to put ee with manager name and role

    db.query(sql, (err, results) => {
        if (err) throw err;
        console.table(results);
        options();
    });
};

const addDepartment = () => {

};
const addRole = () => {

};
const addEmployee = () => {

};

const updateRole = () => {

};



const quit = () => {
    console.log('Goodbye!');
    db.end();
    process.exit();
};