const mongoose = require("mongoose");

const DreamSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    enum: ["happy", "sad", "exciting", "scary"],
    default: "happy",
  },
});

module.exports = mongoose.model("Dreams", DreamSchema);
