import Browser from "./chromium.js";
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
let test = async () => {
    const browser = new Browser('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', randomInt(1001, 1999), './Profile 1/Default', '', [
        '--disable-accelerated-2d-canvas',
        `--window-size=540,760`,
        `--window-position=0,0`
    ]);
    await browser.start();
    console.log('passed: ', browser);
    await delay(1000);
    await browser.stop();
};
test().catch(console.error);
