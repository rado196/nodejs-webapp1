const cors = require('cors');
const express = require('express');

module.exports = function (app) {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json({ limit: '10mb' }));
  app.use(
    cors({
      credentials: true,
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    })
  );
};
