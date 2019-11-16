var express = require('express');
var bodyParser = require('body-parser');
// create express app
const app = express();
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application."});
});
require('./app/routes/first.routes')(app);
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on http://localhost:3000/");
});
