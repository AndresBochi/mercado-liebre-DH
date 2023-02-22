const express = require('express'); // Importamos modulo express
const app = express(); // Instanciamos Express y lo asignamos a la constante app

const path = require('path'); // Importamos modulo nativo path y lo guardamos en la constante path

app.use(express.static('../public')); // Habilitamos la carpeta public para ser accedida via http

// Levantamos el servidor en el puerto 3000

const port =  process.env.PORT || 3000;

app.listen (port, () => {
    console.log('Servidor corriendo en el puerto ' + port);
});

/*---------------------------- Rutas ----------------------------*/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.post('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
});
