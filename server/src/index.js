const express = require('express');

//Middlewares
//Logs HTTP requests
const morgan = require('morgan');

//Removes and adds response headers for security
const helmet = require('helmet');

//Adds cross origin resource sharing header
const cors = require('cors');

const middlewares = require('./middlewares');

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:3000'
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