"use strict";

/// Includes
const express = require('express');
const bodyParser = require('body-parser');
const Promise = require('bluebird');
const redis = require('redis');
Promise.promisifyAll(redis);
const app = express();
const db = require('./StarryDBConnector.js');

/// Flags / constants
const IN_MAINTENANCE_MODE = false;

/// Set up exress app
app.set('port', (process.env.PORT || 5000));

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// Process application/json
app.use(bodyParser.json());

// Index route
app.get('/', function (req, res) {
    res.send('Hello world, I am a chat bot');
});

app.post('/slack/tip', function (req, res) {
    console.log('someone sent a tip!')
    console.log(${JSON.stringify(req.body)})
    console.log(${JSON.stringify(req.body.entry[0])})
    res.sendStatus(200);
});

// Spin up the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'));
});
