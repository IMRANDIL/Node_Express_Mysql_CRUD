const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: process.env.PASS,
    database: 'TestingCrud',
    multipleStatements: true
})


connection.connect((err, results) => {
    if (err) throw err;
    console.log(`Database Connected`);
})



module.exports = connection;