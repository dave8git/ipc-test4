const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getFiles: (data) => ipcRenderer.invoke('get-files', data),
});
