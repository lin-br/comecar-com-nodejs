const express = require('express');
const routes = express.Router();
const OlaDomain = require('../domain/OlaDomain');

routes.get('/', OlaDomain.index);

module.exports = routes;