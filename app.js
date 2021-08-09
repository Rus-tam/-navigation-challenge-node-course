const express = require('express');

const router = require('./routes/index');
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

app.listen(3000);