const express = require("express");
const Album = require("../models/album.model");

const router = require("express").Router();

router.post("/", async (req, res) => {
  const album = await Album.create(req.body);
  res.status(201).send({ album });
});

router.get("/", async (req, res) => {
  const albums = await Album.find()
    .populate("artist")
    .populate("songs")
    .lean()
    .exec();
  res.status(201).send({ albums });
});

// router.get("/:name", async (req, res) => {
//   const album = await Album.findOne({ name: req.params.name })
//     .populate("artist")
//     .populate("songs")
//     .lean()
//     .exec();
//   res.status(201).send({ album });
// });

router.get("/:id", async (req, res) => {
  const album = await Album.findById(req.params.id)
    .populate("artist")
    .populate("songs")
    .lean()
    .exec();
  res.status(201).send({ album });
});

router.patch("/:id", async (req, res) => {
  const album = await Album.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .lean()
    .exec();
  res.status(200).send({ album });
});

router.delete("/:id", async function (req, res) {
  const album = await Album.findByIdAndDelete(req.params.id).lean().exec();
  res.status(200).send({ album });
});

module.exports = router;
