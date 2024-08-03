const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 3001;

app.use(cors()); 
app.use(express.json()); 

app.get("/api", (req, res) => {
  axios
    .get("http://worldtimeapi.org/api/timezone")
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data from the API:", error);
      res.status(500).send("Internal Server Error");
    });
});

app.post("/region", (req, res) => {
    const { region } = req.body;
    axios
      .get("http://worldtimeapi.org/api/timezone/" + region)
      .then((response) => {
        res.json(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
        res.status(500).send("Internal Server Error");
      });
  });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
