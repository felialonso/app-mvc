const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const routerMain = require('./src/routes/main');


app.use(routerMain);


app.listen(port, () => console.log(`servidor escuchando en puerto ${port} `));