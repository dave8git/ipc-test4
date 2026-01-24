const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const mm = require('music-metadata');
const fs = require('fs').promises;
const path = require('node:path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

ipcMain.handle('get-files', async () => {
  const { filePaths } = await dialog.showOpenDialog({ // The error is because dialog.showOpenDialog() does not return an array. It returns an object with two properties: cancled and filepaths
    properties: ['openFile', 'multiSelections'],
    filters: [
      { name: 'Music', extensions: ['mp3'] },
    ],
  });

  const metadata = await Promise.all( // await zatrzyma aż zostanie odczytane i zwrócone w tablicy metadane dla każdego pliku
    filePaths.map(file => mm.parseFile(file))
  );

  const filesData = await Promise.all(
    filePaths.map(async (file, index) => {
      const stats = await fs.stat(file);
      return {
        metadata: metadata[index],

      }
    })
  );

  // console.log('filesData', filesData)
  console.log('metadata', metadata);
  return filesData;
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
