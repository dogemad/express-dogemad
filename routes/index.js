const router = require('express').Router();

module.exports = () => {
	router.get('/', (req, res) => {
		res.send({ hello: 'world!' });
	});

	/**
	 * ignore favicon
	 */

	router.get('/favicon.ico', (req, res) => {
		res.sendStatus(204);
	});

	return router;
};
