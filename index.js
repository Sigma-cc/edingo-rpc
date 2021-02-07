const path = require('path');
const url = require('url');

const {app, BrowserWindow} = require('electron');

let win;
function createWindow(){
    win = new BrowserWindow({
        width: 880,
        height: 770,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
          },
          transparent: true
    });
    win.loadURL(`file://${__dirname}/index.html`);
    win.setMenu(null);
    //win.webContents.openDevTools();
    
    win.on('closed', ()=>{
        win = null;
    })
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    app.quit();
});