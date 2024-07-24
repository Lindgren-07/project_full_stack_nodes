const express = require('express')
const routes = express.Router();


const CtrlAnotacao = require('./controllers/CtrlAnotacao');
const PriorityController = require('./controllers/PriorityController');
const ContentController = require('./controllers/ContentController');

//rota anotacao
routes.post('/anotacoes', CtrlAnotacao.create);
routes.get('/anotacoes',CtrlAnotacao.read)
routes.delete('/anotacoes/:id', CtrlAnotacao.delete)


routes.get('/priorities', PriorityController.read);
routes.post('/priorities/:id', PriorityController.update);


routes.post('/contents/:id', ContentController.update);

module.exports = routes;