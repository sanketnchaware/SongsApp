const mongoose = require("mongoose");

const ArtistSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Artist = mongoose.model("artist", ArtistSchema);
module.exports = Artist;
