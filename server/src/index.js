const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//Middlewares
//Logs HTTP requests
const morgan = require('morgan');

//Removes and adds response headers for security
const helmet = require('helmet');

//Adds cross origin resource sharing header
const cors = require('cors');

const middlewares = require('./middlewares');

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
});

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN
}));

app.get('/', (req, res) => {
    res.json({
        message: "Hello World!"
    });
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;

app.listen(port, () => {
    console.log(`Listening at ${port}`);
});