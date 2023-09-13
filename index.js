const express = require('express');
// import mysql from 'mysql';
const mysql2 = require('mysql2');
const cors = require('cors');


const app = express();

app.use(cors());

const db = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"my-secret-pw",
    database:"UserManagement"
});

app.get("/emp", (req, res) => {
    const sql = 'SELECT * FROM Employee';
    db.query(sql, (err, data) => {
        if(err){
            console.log(err);
            return res.json('Error')
        } else{
            return res.json(data);
        }
        
    })
})

const port = 3000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});








