const express = require("express");

const router = express.Router();
const Student = require("../models/student");

router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.post("/", async (req, res) => {
  const student = new Student(req.body);
  try {
    const s1 = await student.save();
    res.json(s1);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json(student);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(400).send();
    } else {
      res.send(student);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});
module.exports = router;
