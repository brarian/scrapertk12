const scrape = require("scrape-metadata");
const fs = require("fs");

//const json = require('fs').readFileSync('test.json', 'utf8');



const url = "http://www.k12engineering.net/transcripts/ep2.html";

scrape(url, (err, data) => {
    fs.writeFileSync("new.json",JSON.stringify(data))
});



//console.log(js2xmlparser.parse("episode-info", data))