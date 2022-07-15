const express = require('express');
const app = express();

const index = require('./routes/index');
const studentRoute = require('./routes/studentRoute');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', index);
app.use('/student', studentRoute);

module.exports = app;