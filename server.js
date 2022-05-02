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
                'UPDATE EMPLOYEE ROLE'
            ],
            message: 'What would you like to do?'
        }
    ]).then((answers) => {
        switch (answers.intro) {
            case 'VIEW ALL DEPARTMENTS':
                viewDepartments();
                break;
        }
    })
}






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
    const sql = `SELECT * FROM roles`;

    db.query(sql, (err, results) => {
        if (err) throw err;
        console.table(results);
        options();
     });
 };
const viewEmployees = () => {
    console.log('Viewing all employees');
    const sql = `SELECT * FROM employee`;

    db.query(sql, (err, results) => {
        if (err) throw err;
        console.table(results);
        options();
    });
};