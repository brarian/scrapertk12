const scrape = require("scrape-metadata");
const fs = require("fs");

//const json = require('fs').readFileSync('test.json', 'utf8');

for (let i = 1; i < 7; i++) {
  const url = `http://www.k12engineering.net/transcripts/ep{i}.html`;
  scrape(url, (err, data) => {
    fs.writeFileSync("new.json", JSON.stringify(data));
  });
}

