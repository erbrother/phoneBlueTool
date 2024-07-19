const { app, BrowserWindow } = require('electron')
const { NODE_ENV } = process.env
const path = require('path')
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  // 加载index.html
  // win.loadFile('index.html')

  // 加载url
  const url = NODE_ENV === 'development' ?
    "http://localhost:3000" :
    `file://${path.join(__dirname, '../dist/index.html')}`
  win.loadURL(url)

  // 打开开发者工具
  if (NODE_ENV === 'development') {
    win.webContents.openDevTools()
  }
}

app.whenReady().then(() => {
  createWindow()
})