const express = require('express');

//Middlewares
//Logs HTTP requests
const morgan = require('morgan');

//Removes and adds response headers for security
const helmet = require('helmet');

//Adds cross origin resource sharing header
const cors = require('cors');

const app = express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:3000'
}));

const port = process.env.PORT || 1337;

app.listen(port, () => {
    console.log(`Listening at ${port}`);
});