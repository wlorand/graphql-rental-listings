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
const apollo_server_express_1 = require("apollo-server-express");
const graphqlSchema_1 = require("./graphqlSchema");
// start an express app instance
const app = express_1.default();
const server = new apollo_server_express_1.ApolloServer({ schema: graphqlSchema_1.schema });
// body-parser -- now a part of express
// import bodyParser from 'body-parser';
// misc vars
const PORT = process.env.port || 9000;
// const one = 1;
// import mock data
// import { listings } from './listings';
// middleware - recall order here is imp!
// and should be before any routes which are immed. followed
// app.use(bodyParser.json());
// app.use(express.json());
server.applyMiddleware({ app: app, path: '/api' });
// NOTE: for GraqphQL Server first impl, comment out these REST routes
// app.get('/', (_req, res) => {
//   res.send(`Hello ${one} Express World!`);
// });
// GET listings
// app.get('/listings', (_req, res) => {
//   res.send(listings);
// });
// Delete Listing via POST
// app.get('/delete-listing/:id', (req, res) => {
//   const id: string = req.params.id;
//   // remove listing
//   const newListings = listings.filter((listing) => listing.id !== id);
//   if (listings.length === newListings.length)
//     res.send('no such id found - failed to delete listing');
//   res.send(newListings);
// });
app.listen(PORT, () => {
    console.log(`[app] : server started and listening on http://localhost:${PORT}`);
});
