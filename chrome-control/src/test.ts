import Browser from "./chromium.js";


function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
}


let test = async () => {
    const browser = new Browser('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', randomInt(1001, 1999), 'C:\Users\Renz\Desktop\chrome-control\chrome-control\Profile 1\Default', '', '')
    // awa
    await browser.start()
    console.log('passed: ', browser)
}


test().catch(console.error)