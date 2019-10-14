const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');
//Primeira Rota
routes.get('/products', ProductController.index); // acessando o metodo index do ProductController
routes.get('/products/:id', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.post('/products', ProductController.store);
routes.delete('/products/:id', ProductController.destroy);


module.exports = routes;