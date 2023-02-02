const express = require('express');

const routerMain = express.Router();

routerMain.get('/', (req, res) => {
    res.send('<h1>Bienvenidos a la app-mvc</h1>');
})

routerMain.get('/about', (req, res) => {
    res.send("Somos el grupo numero .... About");
});

module.exports = routerMain;