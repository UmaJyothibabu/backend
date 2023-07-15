const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const PORT = 4568;
const path = require("path");
app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "build"))); //informing server that build is static

app.get("/api/getData", async (req, res) => {
  try {
    let todo = [
      {
        id: 1,
        title: "Attend function at Delhi",
        completed: false,
      },
      {
        id: 2,
        title: "By lap ASAP",
        completed: false,
      },
    ];
    res.json({ data: todo, status: 200 });
  } catch (error) {
    res.status(400).send(error.message);
  }
});
app.get("*", async (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
}); //this should be last route function to be written
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
