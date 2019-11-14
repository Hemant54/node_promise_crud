var first = require('../helpers').first;

//Create and save new user
exports.testing = function (req, res) {
    console.log("first controller");
    first.testing(req).then(function (result) {
        res.json(result);
    }, function (error) {
        res.json(error);
        throw error;
    });
};