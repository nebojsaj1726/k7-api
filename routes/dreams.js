const express = require("express");
const router = express.Router();
const Dream = require("../models/Dream");

router.get("/enum", (req, res) => {
  const allDreamTypes = Dream.schema.path("type").enumValues;
  res.send(allDreamTypes);
});

router.post("/", async (req, res) => {
  const dream = new Dream({
    title: req.body.title,
    description: req.body.description,
    type: req.body.type,
  });

  try {
    const savedDream = await dream.save();
    res.json(savedDream);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const dreams = await Dream.find();
    res.json(dreams);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/:dreamId", async (req, res) => {
  try {
    const dream = await Dream.findById(req.params.dreamId);
    res.json(dream);
  } catch (error) {
    res.json({ message: error });
  }
});

router.patch("/:dreamId", async (req, res) => {
  try {
    const updatedDream = await Dream.updateOne(
      { _id: req.params.dreamId },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          type: req.body.type,
        },
      }
    );
    res.json(updatedDream);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:dreamId", async (req, res) => {
  try {
    const deletedDream = await Dream.deleteOne({ _id: req.params.dreamId });
    res.json(deletedDream);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
