const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Configuração do CORS
app.use(cors({
    origin: 'http://localhost:3001', // URL do frontend
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(require('./routes'));

app.listen(3000);