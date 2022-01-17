const express = require("express");

const connect = require("./src/config/db.config");
const app = express();
app.use(express.json());

const albumController = require("./src/controllers/album.controller");
const artistController = require("./src/controllers/artist.controller");
const songController = require("./src/controllers/song.controller");

app.use("/albums", albumController);
app.use("/artists", artistController);
app.use("/songs", songController);

app.listen(5415, async () => {
  await connect();
  console.log("Server is running at port 5415");
});
