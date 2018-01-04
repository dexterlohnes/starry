"use strict";

const Promise = require('bluebird');
const pgp = require('pg-promise')();
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/starry';
var db = pgp(connectionString);

function AddTipForUser(userid, tipAmount_XLM) {
	console.log('Someone added a tip so they can tip people!')
}

function SendTipToUser(sender_userId, receiver_userId, tipAmount_XLM) {
	console.log('Someone wanted to send a tip!')
}

module.exports = {
	AddTipForUser,
	SendTipToUser
};
