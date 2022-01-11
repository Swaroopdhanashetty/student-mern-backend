const mongoose = require("mongoose");

const alineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("student", alineSchema);
