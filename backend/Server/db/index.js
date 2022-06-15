const mysql = require("mysql");

// pool.query("SELECT * from sys.moduledata", (err, res) => {
//   return console.log(res);
// });

const pool = mysql.createConnection({
  connectionLimit: 10,
  password: "mehs",
  user: "root",
  host: "localhost",
  database: "sys",
  port: "3306",
});

pool.connect((err) => {
  if (!err) {
    console.log("connected");
  } else {
    console.log("connection failed");
  }
});

module.exports = pool;
