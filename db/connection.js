const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'workers'
    },
    console.log('Connected to the workers database.')
);
module.exports = db;