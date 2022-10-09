"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./utils/store");
const create_notification_1 = require("./utils/create-notification");
const electron_1 = require("electron");
const menubar_1 = require("menubar");
const path_1 = __importDefault(require("path"));
const to_milliseconds_1 = require("./utils/to-milliseconds");
console.log(path_1.default.join(__dirname, './icon@2x.png'));
const mb = (0, menubar_1.menubar)({
    dir: 'src',
    browserWindow: {
        width: 300,
        height: 200,
        webPreferences: {
            nodeIntegration: true,
            preload: path_1.default.join(__dirname, './preload.js')
        },
        resizable: false
    }
});
const handleEnabledChange = (() => {
    let intervalRef;
    return (enabled) => {
        if (enabled !== undefined) {
            if (intervalRef) {
                clearInterval(intervalRef);
            }
            store_1.store.set(store_1.STORE_KEY, enabled);
            if (store_1.store.get(store_1.STORE_KEY)) {
                intervalRef = setInterval(create_notification_1.createNotification, (0, to_milliseconds_1.toMilliseconds)(0, 0, 5));
            }
        }
    };
})();
mb.on('ready', () => {
    handleEnabledChange(store_1.store.get(store_1.STORE_KEY));
    electron_1.ipcMain.on('update-enabled', (_, enabled) => handleEnabledChange(enabled));
});
//# sourceMappingURL=index.js.map