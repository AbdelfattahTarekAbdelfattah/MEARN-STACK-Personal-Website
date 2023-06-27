const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messagesSchema = new Schema({
  Uname: String,
  Uemail: String,
  Umessage: String,
});
const uMessage = mongoose.model("Message", messagesSchema);

// export the model
module.exports = uMessage;
