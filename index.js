const puppeteer = require("puppeteer");
const fs = require("fs");

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const descriptionSelector =
    "body > div.mainPage > div.mainContent > div.mainContentLeft > div:nth-child(1) span.sectionText > p:nth-child(2)";

  for (let i = 50; i < 55; i++) {
    await page.goto(`http://www.k12engineering.net/transcripts/ep${i}.html`);
    let title = await page.title();
    let description = await page.evaluate(sel => {
      return document.querySelector(sel).innerText.replace("/", "");
    }, descriptionSelector);


    let data = {
      "title" : title, 
      "description" : description 
    }
    fs.writeFileSync("new3.json", JSON.stringify(data))
  }
}
run();
