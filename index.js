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
//   await page.screenshot({ path: "example.png" });

  const dressNames = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".sectionText")).map(
      dressName => dressName.innerText.trim()
    )
  );

  const prices = await page.evaluate(() => 
    Array.from(document.querySelectorAll(".c-product-tile__price")).map(
 price=> price.innerText.trim()
    )
  );

// const list = await page.evaluate(() => {
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
 
  console.log([...dressNames]);
  //console.log(list);
  //log([...list]);
  
  await browser.close();
})();
