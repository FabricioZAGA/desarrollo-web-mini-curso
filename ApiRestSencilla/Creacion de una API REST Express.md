1.  Crear una carpeta con el nombre de nuestra api

2.  Abrir la carpeta con VsCode

3.  Abrir la consola y escribir

    ```shell
    npm init
    ```

4.  Dar enter a todos los valores, se tiene que crear un archivo package.json
5.  Escribir en la consola, para instalar nuestras dependencias

    ```shell
    npm add express
    npm i --save-dev nodemon
    ```

6.  En el archivo package.json escribir nuestro script para arrancar nuestro servidor

    6.1. Borrar la linea

    `"test": "echo \"Error: no test specified\" && exit 1"`

    6.2. Escribir lo siguiente en donde borramos la linea pasada

    `"start": "nodemon server.js"`

7.  Crearemos un archivo llamado .gitignore

    7.1. Dentro del archivo escribiremos
    node_modules

8.  Crearemos un archivo llamado server.js (este servirá para dar la lógica de nuestro servidor)

    8.1. En este archivo colocaremos el siguiente código

        const express = require('express');
        const app = express();

        app.use(express.json());

        const apiRouter = require('./routes/api');
        app.use('/api', apiRouter);

        app.listen(3000, () => console.log('Escuchando en el puerto 3000!'));

9.  A continuación crearemos un folder llamado routes con un archivo llamado api.js dentro de él

    9.1. En el archivo api.js colocaremos el siguiente código

        const express = require('express');
        const router = express.Router();

        		router.get('/', function (req, res) {

        res.send('Hola mundo!');
        });

        		module.exports = router;

10. Y habremos finalizado nuestra API base podremos probar con el comando

    ```shell
    npm start
    ```

    10.1 Entraremos a nuestro navegador y colocaremos la ruta http://localhost:3000/api donde nos deberá de mostrar `Hola mundo!`
