"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNotification = void 0;
const electron_1 = require("electron");
let lastNotification;
const createNotification = () => {
    if (lastNotification) {
        lastNotification.close();
    }
    lastNotification = new electron_1.Notification({
        title: 'Twenty Twenty',
        body: 'It\'s time to take a break',
        silent: false
    });
    lastNotification.show();
};
exports.createNotification = createNotification;
//# sourceMappingURL=create-notification.js.map