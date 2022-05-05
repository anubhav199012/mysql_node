var express = require('express'),
    router = express.Router();
let constant = require('../config/constant');

const mysql = require('mysql');

const db = require("../config/db");

router.post('/', function (req, res) {
    db.query("SELECT * FROM USERS",(err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows fetch
        console.log(data);
    });
    res.json({ message: "Welcome to My application." });
    console.log("Hello World");
});



module.exports = router;    