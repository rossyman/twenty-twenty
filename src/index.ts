import { STORE_KEY, store } from './utils/store';

import { createNotification } from './utils/create-notification';
import { ipcMain } from 'electron';
import { menubar } from 'menubar';
import path from 'path';
import { toMilliseconds } from './utils/to-milliseconds';

const mb = menubar({
  dir: 'src',
  browserWindow: {
    width: 300,
    height: 200,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, './preload.js')
    },
    resizable: false
  }
});

const handleEnabledChange = (() => {
  let intervalRef: ReturnType<typeof setInterval>;
  return (enabled?: boolean) => {
    if (enabled !== undefined) {
      if (intervalRef) {
        clearInterval(intervalRef);
      }
      store.set(STORE_KEY, enabled);
      if (store.get(STORE_KEY)) {
        intervalRef = setInterval(
          createNotification,
          toMilliseconds(0, 0, 5)
        );
      }
    }
  };
})();

mb.on('ready', () => {
  handleEnabledChange(store.get(STORE_KEY));
  ipcMain.on('update-enabled', (_, enabled: boolean) => handleEnabledChange(enabled))
});
