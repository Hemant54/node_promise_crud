var utils = require('../../utils-module');

module.exports = {
    testing: function (req) {
        //console.log("testing helper")
        return new Promise(function (resolve, reject) {
            var user_name = req.body.username ? req.body.username : "";
            if(utils.str.is_not_empty(user_name)){
                var response = {};
                response['authCode'] = 200;
                response['status'] = "ok";
                response['msg'] = req.body;
                resolve(response);
            }else{
                response['authCode'] = 401;
                response['status'] = "Error";
                response['msg'] = "Empty user_name";
                resolve(response);
            }
            //resolve("Hello Testing")
            //console.log("Hello Testing")
        });
    },
}
