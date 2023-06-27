const express = require("express");
const app = express();
const port = 5001;
// use ejs
app.set("view engine", "ejs");
// use public
app.use(express.static("public"));
// import moongose
const mongoose = require("mongoose");
// import messages models
const uMessage = require("./models/messages");

// connect db
mongoose
  .connect(
    "mongodb+srv://abdelfattahmessages:2481001A@abdelfattah-messages.asasccl.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("|| Connection Done ||");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.render("home", { title: "Abdelfattah Tarek" });
});

app.post("/message", (req, res) => {
  // save the message in db
  const messages = new uMessage(req.body);
    messages
      .save()
      .then((result) => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

// 404 error
app.use((req, res) => {
  res.status(404).render("404", { title: "404 Error || Page Not Found" });
});

app.listen(port, () => console.log(`app work at http://localhost:${port}`));
