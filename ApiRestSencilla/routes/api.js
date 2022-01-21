const express = require('express');
// Utilizando el router de express
const router = express.Router();

// Ruta vacía = /    req = request, res = response
router.get('/', function (req, res) {
  res.send('Hola mundo!');
});

// Ruta GET = /get
router.get('/get', function (req, res) {
  res.send('Hola soy un GET!');
});

// Ruta POST = /post
router.post('/post', function (req, res) {
  res.send('Hola soy un POST!');
});

// Ruta POST con body request = /post/body
router.post('/post/body', function (req, res) {
  res.send(req.body);
});

// Ruta PUT = /put
router.put('/put', function (req, res) {
  res.send('Hola soy un PUT!');
});

// Ruta PUT con params = /put/param/x
router.put('/put/param/:parametro1', function (req, res) {
  res.send('Este es mi param: ' + req.params.parametro1);
});

// Ruta DELETE = /delete
router.delete('/delete', function (req, res) {
  res.send('Hola soy un DELETE!');
});

// Ruta DELETE con body y params = /delete/body-param/x
router.delete('/delete/body-param/:parametro', function (req, res) {
  res.send(
    'Este es mi body especificado: ' +
      req.body.cuerpo +
      ', este es mi param: ' +
      req.params.parametro
  );
});

module.exports = router;
