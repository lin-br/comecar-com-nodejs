const express = require('express');
const routes = require('./src/controller/routes');

const app = express();

// Permite que envie dados para aplicação em formato JSON através do BODY da request:
app.use(express.json());
app.use('/api', routes);

app.listen(3000);