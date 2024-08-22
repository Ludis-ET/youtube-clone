import express from "express";
import Ffmpeg from "fluent-ffmpeg";

const app = express();
const port = 3000;

app.post("/process-video", (req, res) => {
  const inputFilePath = req.body.inputFilePath;
  const outputFilePath = req.body.outputFilePath;

  if (!inputFilePath || !outputFilePath) {
    res.status(400).send("Bad request: Missing file path. ");
  }
});

app.listen(port, () => {
  console.log("serving");
});
