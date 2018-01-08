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

/// Set up express app
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
    console.log(JSON.stringify(req.body))
    res.sendStatus(200);
    // If the user is not registered, return an error appropriate. Maybe instruct them how to register
    // else if the user is registered
        // Check the amount against the user's current balance
        // If the user's balance is not high enough, return an error containing the current balance
        // If the user's balance is high enough, first identify the receiver by retreiving their user_id (UUID) then check if the receiver is already registered
        // If a user does not exist in the db with their particular info,
            // Add them to the database without a public wallet address (the real mark of not being registered)
            // Save the tip info in the database
            //
        // Else-If a user DOES exist in the db with their particlar inof
            // Make the transfer happen
            // If failure
                // send an appropriate message to the tipper
            // If success
                // remove the tip from the sender's balance
                // add the tip to the receiver's balance
                // send a success message to the sender
                // send a personal message to the receiver alerting them they received a tip
});

app.post('/slack/withdraw', function (req, res) {
    console.log('someone wants to make a withdrawal!')
    console.log(JSON.stringify(req.body))
    res.sendStatus(200);

    // If the user is not registered, return an error appropriate. Maybe instruct them how to register
    // else if the user is registered
        // Check the amount against the user's current balance
        // If the user's balance is not high enough, return an error containing the current balance
        // If the user's balance is high enough, make the withdrawal and send a message depending on success or failure

});

app.post('/slack/register', function (req, res) {
    console.log('someone wants to register!')
    console.log(JSON.stringify(req.body))



    res.sendStatus(200);



    // If the user is already registered, send them a message back explaining (and that
    // If the user is not already registered
        // Validate their wallet address
        // Make sure no one else has already registered that same wallet address
        // Save to the database
        // Send them a message back (error if applicable)
});

// Spin up the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'));
});

