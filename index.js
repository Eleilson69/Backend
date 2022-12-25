const express = require('express');
const filmes = require('./src/data/filmes.json')

const app = express();
const port = process.env.PORT || 3000;

app.get('/filmes', (req, res) => {
    return res.json(filmes)
})

app.listen(port, () => {
    console.log(`servidor está rodando`)
})