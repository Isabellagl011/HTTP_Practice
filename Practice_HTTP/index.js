const mongoose = require("mongoose");
const express = require("express");
const app = express();
const routerApi = require("./src/routes");
require("dotenv").config();
const port = process.env.PORT;

app.listen(port, () => console.log("port active", port));

mongoose
  .connect(process.env.MONGODB_STRING_CONNECTION)
  .then(() => console.log('succes connection with Mongo'))
  .catch((error) => console.error(error));

//respuesta a solicitudes http formato json
app.use(express.json());
//permitir hacer el llamado de los request
routerApi(app);
