const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://Sankyaaaaa07:145266268@cluster0.nxsjx.mongodb.net/spotify?retryWrites=true&w=majority"
  );
};

module.exports = connect;
