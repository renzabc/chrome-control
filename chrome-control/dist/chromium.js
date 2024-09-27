// import WebSocket from 'ws';
import * as fs from 'fs';
// import path from 'path';
// import { ChildProcess } from 'child_process';
// import http from 'http'
// Classes
// CHROMIUM: Launch a browser instance with certain options/settings.
class Chromium {
    constructor(binaryPath, port, profileDir, proxyString, options) {
    }
    // randomInt(lowerBound: number, upperBound: number) {
    // }
    // async delay(milliseconds: number) {
    // }
    async launch() {
    }
    async connectWS(ws) {
    }
    async send(command) {
    }
    async goto(url) {
    }
    async executeScript(script) {
    }
    async close() {
    }
}
// BROWSER: This is the main class. This is the object the user will use
// to create browser instances and call functions from other classes.
class Browser {
    _browser;
    _binaryPath;
    _port;
    _proxyString;
    _options;
    _profileDir;
    constructor(binaryPath, port, profileDir, proxyString, options) {
        this._browser = null;
        this._binaryPath = binaryPath;
        this._port = port;
        this._profileDir = profileDir;
        this._proxyString = proxyString;
        this._options = options;
    }
    randomInt(lowerBound, upperBound) {
    }
    async delay(milliseconds) {
    }
    async start() {
        console.log('bp: ', this._binaryPath);
        // check to see if the chromiu browser executable exists in the given folder. If not throw error
        if (fs.existsSync("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe") == false) {
            throw new Error(`No Chromium binary found in path: ${this._binaryPath}.`);
        }
        // if this._browser is still null, then we create the browser object and launch the browser instance
        if (this._browser == null) {
            this._browser = new Chromium(this._binaryPath, this._port, this._profileDir, this._proxyString, this._options);
            // We call the launch() function. If it does not return true, it has failed to launch successfully and we throw an error.
            if (await this._browser.launch() != true) {
                throw new Error('Browser failed to launch successfully');
            }
        }
        // return the current value so we know that the browser instance is live
        return [this._browser, this._binaryPath];
    }
    async stop() {
    }
}
// KEYBOARD STROKES
// MOUSE CLICKS
// module.exports = { Browser };
export default Browser;
