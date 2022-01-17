const express = require("express");
const Artist = require("../models/artist.model");

const router = require("express").Router();

router.post("/", async (req, res) => {
  const artist = await Artist.create(req.body);
  res.status(201).send({ artist });
});

router.get("/", async (req, res) => {
  const artists = await Artist.find().lean().exec(req.body);
  res.status(200).send({ artists });
});

router.patch("/:id", async (req, res) => {
  const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .lean()
    .exec();
  res.status(200).send({artist});
});

router.delete("/:id", async (req, res) => {
  const artist = await Artist.findByIdAndDelete(req.params.id).lean().exec();
  res.status(200).send({artist});
});
module.exports = router;
