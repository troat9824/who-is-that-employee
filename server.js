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
    ])
}