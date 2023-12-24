const app = require('./application');

const registerMiddleware = require('./middleware');
const registerRoutes = require('../routes');

registerMiddleware(app);
registerRoutes(app);

module.exports = app;
