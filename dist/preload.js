"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./utils/store");
const electron_1 = require("electron");
console.log('TEST!');
electron_1.contextBridge
    .exposeInMainWorld('twentyTwentyIPC', {
    initialState: store_1.store.get(store_1.STORE_KEY),
    setEnabled: (enabled) => electron_1.ipcRenderer.send('update-enabled', enabled)
});
//# sourceMappingURL=preload.js.map