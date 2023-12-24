// configure environment
const path = require('node:path');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

dotenvExpand.expand(
  dotenv.config({
    path: path.join(__dirname, '..', '.env'),
  })
);

// registering models
require('./models');

// create app
const database = require('./database');
const app = require('./core');
const listRoutes = require('express-list-routes');

// start server
database.connect().then(function () {
  const port = process.env.NODE_PORT;
  app.listen(port, function () {
    console.log(`Node.JS app listening on port ${port} !!!`);
    listRoutes(app);
  });
});
