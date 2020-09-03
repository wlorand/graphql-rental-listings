"use strict";
/**
 * File: index.js
 * Desc: simple Express server to start
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = process.env.port || 9000;
const app = express_1.default();
app.get('/', (req, res) => {
    res.send('Hello Express World!');
});
app.listen(PORT, () => {
    console.log(`[app] : server started and listening on http://localhost:${PORT}`);
});
