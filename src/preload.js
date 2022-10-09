import { STORE_KEY, store } from './utils/store';
import { contextBridge, ipcRenderer } from 'electron';

console.log('TEST!');

contextBridge
  .exposeInMainWorld('twentyTwentyIPC', {
    initialState: store.get(STORE_KEY),
    setEnabled: (enabled) => ipcRenderer.send('update-enabled', enabled)
  });
