import express from "express";
import { readFile } from "fs";

import attachPreClassRoute from "./pre-class-middleware.js";

const app = express();

attachPreClassRoute(app);

const sightingProperties = [
  "YEAR",
  "SEASON",
  "STATE",
  "COUNTY",
  "LOCATION_DETAILS",
  "OBSERVED",
  "OTHER_WITNESSES",
  "TIME_AND_CONDITIONS",
  "REPORT_NUMBER",
  "REPORT_CLASS",
  "MONTH",
  "DATE",
  "NEAREST_TOWN",
  "NEAREST_ROAD",
  "ALSO_NOTICED",
  "OTHER_STORIES",
  "ENVIRONMENT",
  "A_&_G_References",
];

app.get("/sightings/:index", (request, response) => {
  const { params } = request;
  const { index } = params;

  console.log("To read file");
  readFile("data.json", (err, content) => {
    if (err) {
      res.status(500).send("Error retrieving from data store");
    }

    const { sightings } = JSON.parse(content);
    const sight = sightings[index];
    console.log("sighted", sight);

    const divs = sightingProperties.map((key) => {
      const value = sight[key];
      return `<div>${key}: ${value ?? ""}</div>`;
    });
    const htmlResponse = `
    <html>
      <body>
        <h1>hello ${divs.join("")}</h1>
      </body>
    </html>
  `;
    response.send(htmlResponse);
  });
});

const listeningPort = 3004;
app.listen(listeningPort, "127.0.0.1", () => {
  console.log(`listening to ${listeningPort}`);
});
