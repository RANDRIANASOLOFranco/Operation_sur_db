var express = require('express');
var mi_contro = require('../Controllers/controle.js');
var rout = express.Router();

rout.get('/data', mi_contro.getData);
rout.post('/data', mi_contro.postData);
rout.delete('/data', mi_contro.deleteData);

module.exports = rout;