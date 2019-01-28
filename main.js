/* basic, electron based webbrowser. lightweight, fast and beautiful */

const {app, BrowserWindow} = require("electron");

let win;

function createWindow() {

	win = new BrowserWindow({
        width: 1200, 
        height: 900, 
        frame: false, 
        transparent: true,
        nodeIntegration: true
    });
	win.loadFile("index.html");
	
}

app.on('ready', function () {
    setTimeout(function() {
        createWindow();
    }, 100);
});
