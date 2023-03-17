const express = require('express');
const personRouter = require('./person.router');

function routerApi(app) {
  const router = express.Router();
  /* Endpoint estático: http://localhost:5000/api/person */
  app.use('/api', router);
  /* Endpoint estático: http://localhost:5000/api/person */
  router.use('/people', personRouter);
}

module.exports = routerApi;
