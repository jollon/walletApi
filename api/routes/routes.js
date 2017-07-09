'use strict';
module.exports = function(app) {
	var apiWallet = require('../controllers/api');
	app.route('/create')
		.post(apiWallet.create)
	
	app.route('/balance')
		.post(apiWallet.getBalance)
};