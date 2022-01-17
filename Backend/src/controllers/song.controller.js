const express = require("express");
const Song = require("../models/song.model");

const router = require("express").Router();

router.post("/", async (req, res) => {
  const song = await Song.create(req.body);
  res.status(201).send({ song });
});

router.get("/", async (req, res) => {
  const songs = await Song.find().lean().exec();
  res.status(200).send({ songs });
});
router.patch("/:id", async (req, res) => {
  const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }) /*  */
    .lean()
    .exec();
  res.status(200).send({ song });
});

router.delete("/:id", async (req, res) => {
  const song = await Song.findByIdAndDelete(req.params.id).lean().exec();
  res.status(200).send({ song });
});

module.exports = router;
