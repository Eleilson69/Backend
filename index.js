const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const filmes = require('./src/data/filmes.json');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json(filmes);
})

app.listen(21262, () => {
    console.log('Express startd at http://localhost:21262');
})