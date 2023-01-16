const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json(({message: "API Listening"}));
});

app.listen(HTTP_PORT, () => {
    console.log('Ready to handle requests on port ' + HTTP_PORT);
});