const path = require('path');
const url = require('url');

const {app, BrowserWindow} = require('electron');

let win;
function createWindow(){
    win = new BrowserWindow({
        width: 400,
        height: 560,
        titleBarStyle: 'hidden',
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
          }
    });
    win.loadURL(`file://${__dirname}/index.html`);
    
    //win.webContents.openDevTools();
    
    win.on('closed', ()=>{
        win = null;
    })
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    app.quit();
});