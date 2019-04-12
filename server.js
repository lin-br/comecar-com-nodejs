const express = require('express');
const routes = require('./src/controller/routes');

const app = express();

app.use('/api', routes);

app.listen(3000);