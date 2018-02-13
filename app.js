const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/fb");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);

module.exports = app;
