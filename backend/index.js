const express = require("express");
require("dotenv").config();

const app = express();
var cors = require("cors");
const port = process.env.PORT;

var corsOptions = {
  origin: "http://localhost:3000", //allowed origin
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const fetchIntentList = require("./dialogflow/fetchIntentList");
app.get("/", (req, res) => {
  res.send("You are at the root directory");
});

app.get("/intents", async (req, res) => {
  const intentList = await fetchIntentList();
  console.log(intentList);
  res.status(200).json({ intentList });
});

app.listen(8000, () => {
  console.log("App is running on port 8000");
});
