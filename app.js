const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/Students";
const cors = require("cors");
const app = express();
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});
app.use(express.json());
app.use(cors());
const studentsRouter = require("./routers/students");
app.use("/students", studentsRouter);
app.listen(9000, () => {
  console.log("setver started");
});
