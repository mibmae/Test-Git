require('dotenv').config();

const express = require('express');
const app = express();

console.log(`OK, c'est cool`);

app.listen(process.env.port);