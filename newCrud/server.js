var express = require('express');
var bodyParser = require('body-parser');
var loggers = require('express-logger');
var morgan = require('morgan')

// create express app
const app = express();
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a simple route
app.use(loggers({ path: "./logfile.txt" }));
morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
})

app.get('/', (req, res) => {
    res.json({"message": "Welcome to node_promise_crud  application."});
});
require('./app/routes/first.routes')(app);

global.success_code = "200";
global.error_code = "100";
global.success_status_value = true;
global.failure_status_value = false;
        
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on http://localhost:3000/");
});

module.exports = app;