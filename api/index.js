const express = require("express");
const app = express();
const cors = require("cors");
const characterJsonResponse = require("../public/data/characters.json"); 


app.use(cors());

app.get("/datos", (req, res) => res.json(characterJsonResponse));
app.use(express.static('public'))


app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;