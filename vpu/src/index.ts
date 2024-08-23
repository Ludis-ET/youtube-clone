import express from "express";
import Ffmpeg from "fluent-ffmpeg";

const app = express();
app.use(express.json())

app.post("/process-video", (req, res) => {
  const inputFilePath = req.body.inputFilePath;
  const outputFilePath = req.body.outputFilePath;

  if (!inputFilePath || !outputFilePath) {
    res.status(400).send("Bad request: Missing file path. ");
  }

  Ffmpeg(inputFilePath)
    .outputOption("-vf", "scale=-1:360")
    .on("end", () => {
      return res.status(200).send("Processing finished successfully.");
    })
    .on("error", (error) => {
      console.log(error.message);
      res.status(500).send(`Internal Server Error: ${error.message}`);
    })
    .save(outputFilePath);
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("serving");
});
