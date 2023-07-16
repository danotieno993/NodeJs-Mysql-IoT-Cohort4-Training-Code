var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Root@123"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE nodejs", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

// insert data into the table

app.get("/insertdata", (req, res) => {

    let post = { name: "Myles", designation: "student" };

    let sql = "INSERT INTO employee SET?";

    let query = db.query(sql, post, (err) => {




        if (err) {

   

          throw err;

   

        }

   

        res.send("Employee created");

   

      });

   

    });