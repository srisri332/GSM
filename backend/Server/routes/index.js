const express = require("express");

const router = express.Router();
const pool = require("../db/index");
const fs = require("fs/promises");

async function getData() {
  try {
    const data = await fs.readFile("Server/data.txt", { encoding: "utf8" });
    let lines = data.split("\n");

    lines.forEach(function (item, index) {
      // console.log(item, index);
      let eachItem = item.split("-");

      console.log(
        "ADDED" +
          "\n" +
          " ID " +
          eachItem[0] +
          " Date " +
          eachItem[1] +
          " Time " +
          eachItem[2] +
          " Latitude " +
          eachItem[3] +
          " Longitude " +
          eachItem[4] +
          " Temperature " +
          eachItem[5]
      );

      if (item != "") {
        pool.query(
          `insert into sys.autotable (ID,Date,Time,Latitude,Longitude,Temperature) values ('${eachItem[0]}', '${eachItem[1]}','${eachItem[2]}','${eachItem[3]}','${eachItem[4]}','${eachItem[5]}')`
        );
      }
    });
  } catch (e) {
    console.log(e);
  }
  setTimeout(getData, 120000);
}

setTimeout(getData, 10);

router.get("/", async (req, res, next) => {
  pool.query(
    "SELECT * from sys.autotable ORDER by count DESC",
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

// router.get("/add", async (req, res, next) => {
//   pool.query(
//     `INSERT INTO sys.projectdata VALUES ("5","INDO1234","8-8-22","2:39","12.0000", "9.8888", "7.5")`,
//     (err, rows, fields) => {
//       if (!err) {
//         res.send(rows);
//       } else {
//         console.log(err);
//       }
//     }
//   );
// });

module.exports = router;
