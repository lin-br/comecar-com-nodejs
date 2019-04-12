const express = require('express');
const routes = express.Router();
const OlaDomain = require('../domain/OlaDomain');

routes.get('/', OlaDomain.index);
routes.get('/teste', OlaDomain.exibirQueryParams);
routes.get('/:id', OlaDomain.show);
routes.post('/', OlaDomain.store);

module.exports = routes;