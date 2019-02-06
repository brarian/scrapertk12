const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = "https://www.freepeople.com/dresses/";
  await page.goto(url);
  //  await page.screenshot({ path: "example.png" });

  const dressNames = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".c-product-tile__h3")).map(
      dressName => dressName.innerText.trim()
    )
  );

  const prices = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".c-product-tile__price")).map(
 price=> price.innerText.trim()
    )
  );
  //spread the
  //console.log([...dressNames]);
  console.log([...prices]);

  //console.log(price);

  //console.log(innerText);

  await browser.close();
})();
