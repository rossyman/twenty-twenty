"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.STORE_KEY = void 0;
const electron_store_1 = __importDefault(require("electron-store"));
exports.STORE_KEY = 'enabled';
exports.store = new electron_store_1.default();
//# sourceMappingURL=store.js.map