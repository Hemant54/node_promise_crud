var express = require('express');
var bodyParser = require('body-parser');
var Promise = require('promise');
var jwt = require('jsonwebtoken');
var _ = require('underscore');
var cors = require('cors');
const logger = require('morgan');
var app = express();
var moment = require('moment-timezone');
//moment.tz.setDefault('Asia/Kolkata');
moment.tz(Date.now(), "Asia/Kolkata");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

require('./app/routes/users.routes')(app);
app.set('port', process.env.PORT || 3003);
var server = app.listen(app.get('port'), function () {
    console.log('Server started, listening on port ' + app.get('port'));
}, "0.0.0.0");
server.timeout = 100000000;

var loggers = require('express-logger');
app.use(loggers({ path: "./logfile.txt" }));
module.exports = app;