/**
 * File: index.js
 * Desc: simple Express server to start
 */

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './graphqlSchema';

// start an express app instance
const app = express();
const server = new ApolloServer({ schema });
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
  console.log(
    `[app] : server started and listening on http://localhost:${PORT}`
  );
});
