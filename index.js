// Connect to db
const express = require("express"); //express module to build web/mobile apps
const mysql = require("mysql");
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root@123',
    database: 'nodejs'
});

db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log("MySql Connected");
  });
  const app = express();
  app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE nodejs";
    db.query(sql, (err) => {
      if (err) {
        throw err;
      }
      res.send("Database created");
    });
  });
  app.listen('3000', () => {
    console.log('server started ok')
  });
  app.get("/createemployee", (req, res) => {
    let sql =
      "CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))";
      db.query(sql, (err) => {
        if (err) {
          throw err;
        }
        res.send("Employee table created");
      });
    });

    // insert data into the table
  app.get("/insertdata", (req, res) => {
    //Insert one entry
    // let post = { name: "Daniel", designation: "C.E.O" };
    //insert multiple entries
    let post = [
      { name: "John Doe", designation: "CTIO" },
      { name: "Daniel", designation: "C.E.O" },
      { name: "John Doe", designation: "CTIO" },
      { name: "Daniel Doe", designation: "CHRO" },
      { name: "Myles Doe", designation: "CFO" },
    ];

    let sql = "INSERT INTO employee SET?";
    let query = db.query(sql, post, (err) => {
        if (err) { 
          throw err; 
        } 
        res.send("Employee created"); 
      }); 
    });