/* basic, electron based webbrowser. lightweight, fast and beautiful */

const {app, BrowserWindow} = require("electron");

let win;

function createWindow() {

	win = new BrowserWindow({width: 800, height: 600, frame: false, transparent: true});
	win.loadFile("index.html");
	
}

app.on('ready', function () {
    setTimeout(function() {
        createWindow();
    }, 100);
});
