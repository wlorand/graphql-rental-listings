/**
 * File: index.js
 * Desc: simple Express server to start
 */

import express from 'express';
const PORT = process.env.port || 9000;

const one = 1;

const app = express();

app.get('/', (_req, res) => {
  res.send(`Hello ${one} Express World!`);
});

app.listen(PORT, () => {
  console.log(
    `[app] : server started and listening on http://localhost:${PORT}`
  );
});
