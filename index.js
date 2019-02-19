const fs = require("fs");
const puppeteer = require("puppeteer");

// python to go through pages sequntially ?
//map constants
//figure out how to turn map to json file
//json to sql

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = "http://www.k12engineering.net/transcripts/ep2.html";
  await page.goto(url);

  const entireBody = await page.evaluate(() =>
    (document.querySelector('head > meta:nth-child(12)')
    )
  );

  // const meta = await page.evaluate(()=> 
  // JSON.stringify(document.querySelector('head > meta:nth-child(15)'))

  //await page.evaluate(() => 
  //url.document.querySelector('head > meta:nth-child(15)');
  
  

//  const list = await page.evaluate(() => {
  //   let dressNames = document.querySelectorAll(");
  //   let prices = document.querySelectorAll(".c-product-tile__price");
  //   let dAndPriceArray = [];

  //   for (let i = 0; i < dressNames.length; i++){
  //     dAndPriceArray[i] = {
  //       dressNames: dressNames[i].innerText.trim(),
  //       prices: prices[i].innerText.trim()
  //     };
  //   }
  //    console.log([...dAndPriceArray]);
  // })

  // let data = JSON.stringify(meta);
  console.log(JSON.stringify(entireBody));


  await browser.close();
})();
