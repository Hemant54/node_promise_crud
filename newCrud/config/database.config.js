var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'promise_crud'
});

db.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + db.threadId);
});

/*var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.1.3:27017/lti_local' ,{ useNewUrlParser: true });
var db1 = mongoose.connection;
db1.on('error', console.error.bind(console, 'connection error:'));
db1.once('open', function () {
    // we're connected!
    console.log("mongo connected!!");
});

require('mongoose').set('debug', true)*/

module.exports = db;