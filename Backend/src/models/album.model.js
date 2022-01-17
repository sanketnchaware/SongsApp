const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    genre: { type: String, required: true },
    year: { type: Number, required: true },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "artist",
      required: true,
    },
    songs: [
      { type: mongoose.Schema.Types.ObjectId, ref: "song", required: true },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Album = mongoose.model("album", AlbumSchema);
module.exports = Album;
