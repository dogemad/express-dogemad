const store = require('../store');

const request = store.request;

/**
 * @description Mocha test example 1.
 * @param {object} [data = null] - Project information object.
 * @param {number} [expect_http_status = 200] - Expected response code number.
 * @param {function} [expect_callback = res => console.log(res.body)] - Customization callback function for http response.
 */
const firstExample = function(
	data = null,
	expect_http_status = 200,
	expect_callback = res => console.log(res.body)
) {
	return describe(`GET /`, function() {
		it(`# test code example 1`, function(done) {
			request
				.get(`/`)
				.set('Cookie', [`key=value`])
				.expect(expect_http_status)
				.expect(expect_callback)
				.send(data && data != undefined ? data : {})
				.end((err, res) => {
					if (err) {
						done(err);
						return;
					}

					done();
				});
		});
	});
};

/**
 * @description Mocha test example 2.
 * @param {object} [data = null] - Project information object.
 * @param {number} [expect_http_status = 200] - Expected response code number.
 * @param {function} [expect_callback = res => console.log(res.body)] - Customization callback function for http response.
 */
const secondExample = function(
	data = null,
	expect_http_status = 200,
	expect_callback = res => console.log(res.body)
) {
	return describe(`GET /favicon.ico`, function() {
		it(`# test code example 2`, function(done) {
			request
				.get(`/favicon.ico`)
				.set('Cookie', [`key=value`])
				.expect(expect_http_status)
				.expect(expect_callback)
				.send(data && data != undefined ? data : {})
				.end((err, res) => {
					if (err) {
						done(err);
						return;
					}

					done();
				});
		});
	});
};

module.exports = {
	firstExample: firstExample,
	secondExample: secondExample
};
