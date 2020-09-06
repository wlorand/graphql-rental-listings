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
// body-parser
// import bodyParser from 'body-parser';
// misc vars
const one = 1;
// import mock data
const listings_1 = require("./listings");
const app = express_1.default();
// middleware - recall order here is imp!
// and should be before any routes which are immed. followed
// app.use(bodyParser.json());
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.send(`Hello ${one} Express World!`);
});
// GET listings
app.get('/listings', (_req, res) => {
    res.send(listings_1.listings);
});
// Delete Listing via POST
app.get('/delete-listing/:id', (req, res) => {
    const id = req.params.id;
    // remove listing
    const newListings = listings_1.listings.filter((listing) => listing.id !== id);
    if (listings_1.listings.length === newListings.length)
        res.send('no such id found - failed to delete listing');
    res.send(newListings);
});
app.listen(PORT, () => {
    console.log(`[app] : server started and listening on http://localhost:${PORT}`);
});
