const express = require('express');
const cors = require('cors');
const routes = require('./src/controller/routes');

const app = express();

// Permite que envie dados para aplicação em formato JSON através do BODY da request:
app.use(express.json());
// Habilitando CORS para todos os domínios possíveis
app.use(cors());
app.use('/api', routes);

app.listen(3000);