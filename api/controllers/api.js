'use strict';

const CoinKey = require('coinkey'),
			coinInfo = require('coininfo'),
			request = require('request')

exports.create = function(req, res) {
	const r = req.body;
	if(r.currency) {
		const altcoin = coinInfo(r.currency.toUpperCase()).versions
		try {
			const rand = CoinKey.createRandom(altcoin)

			const wallet = {
				address: rand.publicAddress,
				privateWif: rand.privateWif,
				publicAddress: rand.publicKey.toString('hex'),
				privateKey: rand.privateKey.toString('hex')
			}
			res.json(wallet)
		} catch(err) {
			res.send(err);
		}
	} else {
		res.status(404).send({ error: 'An error occured currency does not exist.' });
	}
};

exports.getBalance = function(req, res) {
	const r = req.body;
	if(r.currency) {
		request('https://api.blockcypher.com/v1/' + r.currency +
			'/main/addrs/' + r.address + '/balance', function (err, response, bal) {
				if(response.statusCode == 200) {
					if (!err) {
						res.json(JSON.parse(bal))
					} else {
						res.status(404).send({ error: err });
					}			
				} else {
					res.status(response.statusCode).send({ error: 'Invalid endpoint' });
				}
		})
	} else {
		res.status(404).send({ error: 'An error occured currency does not exist.' });
	}
}