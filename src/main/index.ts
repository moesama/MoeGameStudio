import { app, BrowserWindow } from 'electron'

const debug = (process.argv.indexOf('--debug') >= 0)

// 保持一个对于 window 对象的全局引用，如果你不这样做，
// 当 JavaScript 对象被垃圾回收， window 会被自动地关闭
let win

// 打开主窗口
function createWindow() {
    // 创建浏览器窗口
    win = new BrowserWindow({
        width: 800,
        height: 600,
        titleBarStyle: 'hiddenInset',
    })
    // 加载应用的 index.html
    const indexPageURL = debug ? 'http://localhost:23333/' : `file://${__dirname}/dist/index.html`
    win.loadURL(indexPageURL)
}

// Electron 会在创建浏览器窗口时调用这个函数。
app.whenReady().then(() => createWindow())
//
// // 当全部窗口关闭时退出
// app.on('window-all-closed', () => {
//     // 在 macOS 上，除非用户用 Cmd + Q 确定地退出
//     // 否则绝大部分应用会保持激活
//     if (process.platform !== 'darwin') {
//         app.quit()
//     }
// })
