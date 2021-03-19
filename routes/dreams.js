const express = require("express");
const router = express.Router();
const Dream = require("../models/Dream");

router.get("/enum", (req, res) => {
  const allDreamTypes = Dream.schema.path("type").enumValues;
  res.send(allDreamTypes);
});

module.exports = router;
