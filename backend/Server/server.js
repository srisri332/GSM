const express = require("express");
const mysql = require("mysql");
const app = express();
var cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

const dataRoutes = require("./routes/index");
const pool = require("./db/index");

app.use(express.json());
app.use("/data", dataRoutes);

app.listen(process.env.PORT || 3001, () => {
  console.log("server is running on port 3001");
});
