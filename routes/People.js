const Router = require('express').Router();
const connection = require('../connection');

Router.get('/', (req, res) => {
    connection.query(`select * from crud_people`, (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        }
        else {
            console.log(err);
        }
    })
})




module.exports = Router;