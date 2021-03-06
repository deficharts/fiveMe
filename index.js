const puppeteer = require('puppeteer');

// This is where we'll put the code to get around the tests.
// const preparePageForTests = async (page) => {

// // Pass the User-Agent Test.
// await page.setUserAgent(userAgent);
// }


(async () => {
    const websiteURL = 'https://ethplorer.io/address/0x111111111117dc0aa78b770fa6a738034120c302#chart=candlestick';
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
//   await preparePageForTests(page);

 // await page.setRequestInterception(true);
 await page.goto(websiteURL, {waitUntil: 'networkidle2'});
  await page.screenshot({ path: 'example.png' });

 const textContent = await page.evaluate(() => {
  
   let price =  document.querySelector('#address-token-price > span:nth-child(1)').innerText
   let price24h =  document.querySelector('#address-token-price > span:nth-child(3) > span').innerText
   let price7days =  document.querySelector('#address-token-price > span:nth-child(4) > span').innerText
   let price30days =  document.querySelector('#address-token-price > span:nth-child(5) > span').innerText
   let volume24h =  document.querySelector('#address-token-volDiff > span > span:nth-child(1)').innerText
   let mcap = document.querySelector('#address-token-marketCapUsd').innerText
   let holders = document.querySelector('#address-token-holdersCount').innerText
  //  console.log(data1);
  return {
    price,
    price24h,
    price7days,
    price30days,
    volume24h,
    mcap


  }

 })
 console.log("DAta is here")
 console.log(textContent)
await  browser.close();
})();


// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://google.com',{waitUntil:'networkidle2'});
//   await page.screenshot({ path: 'example.png' });

//   await browser.close();
// })();