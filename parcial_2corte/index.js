const mongoose = require('mongoose');
const express = require('express');
const {
  logErrors,
  errorHandler,
  BoomerrorHandler,
} = require('./src/handlers/errors.handler');
const routerApi = require('./src/routes');
require('dotenv').config();
const port = 5000 || process.env.PORT;


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log('Active port', port));
/* Respuestas a solicitudes http en formato JSON */
app.use(express.json());
app.use(logErrors);
app.use(errorHandler);
app.use(BoomerrorHandler);
/* Permitir hacer el llamado de los request */
routerApi(app);
