require('dotenv').config();

const express = require('express');
const uuid = require('uuid/v1');

const app = express();

app.get('/uuid', (req, res) => res.send(uuid()));

app.listen(process.env.PORT);