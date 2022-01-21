// Importando nuestra librería de express.
const express = require('express');
// Definiendo nuestra aplicación que será de express
const app = express();

// Manejo de JSON's dentro de la aplicación
app.use(express.json());

// Define el router que llevará las rutas de nuestra API
const apiRouter = require('./routes/api');
// Uso de nuestro router de la API llevará la ruta inicial /api
app.use('/api', apiRouter);

// Listener de nuestra aplicación, funcionará en el puerto 3000 'http://localhost:3000'
app.listen(3000, () => console.log('Escuchando en el puerto 3000!'));
