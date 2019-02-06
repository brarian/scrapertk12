const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = 'https://www.freepeople.com/dresses/';
  await page.goto(url);
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();