const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Song = mongoose.model("song", songSchema);
module.exports = Song;
