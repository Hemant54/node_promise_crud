module.exports = function (app) {
	var first = require('../controllers/first.controller.js');
	app.post('/first/testing', first.testing);   
}