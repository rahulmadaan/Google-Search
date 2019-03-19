const express = require("express");
const google = require("google");

const bodyParser = require("body-parser");
const parseGoogleResults = require("./parseGoogleResults.js");

const app = express();

const googleIt = function(req, res) {
  const query = req.body.text;
  google(query, function(err, response) {
    google.resultsPerPage = 15;
    const results = response.links;
    const resultsToDisplay = parseGoogleResults(query, results);
    res.send(resultsToDisplay);
    res.end();
  });
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/", googleIt);

module.exports = app;
