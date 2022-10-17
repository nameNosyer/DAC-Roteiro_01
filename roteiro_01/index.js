const express = require('express');

const PORT = 8000;
const HOST = '0.0.0.0'; //froma do docker endender que unica coisa que precisa refazer é repasar a porta 3000 pra maquina

const app = express();

app.get('/',(req, res) => {
    res.send('Uso inicial do docker');
});

app.listen(PORT, HOST);

