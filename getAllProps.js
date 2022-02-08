import { readFile, writeFile } from "fs";

readFile("data.json", (_, content) => {
  const { sightings } = JSON.parse(content);

  const keySet = new Set();
  for (const sight of sightings) {
    for (const key of Object.keys(sight)) {
      keySet.add(key);
    }
  }
  const keys = [];
  for (const [key] of keySet.entries()) {
    keys.push(key);
  }

  writeFile("props.json", JSON.stringify(keys), () => {});
});
