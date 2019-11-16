var utils = require('../../utils-module');

module.exports = {
    testing: function (req) {
        //console.log("testing helper")
        return new Promise(function (resolve, reject) {
            var user_name = req.body.username ? req.body.username : "";
            var response = {};
            if(utils.str.is_not_empty(user_name)){
                response['authCode'] = success_code;
                response['status'] = success_status_value;
                response['msg'] = req.body;
                resolve(response);
            }else{
                response['authCode'] = error_code;
                response['status'] = failure_status_value;
                response['msg'] = "Empty user_name";
                reject(response);
            }
            //resolve("Hello Testing")
            //console.log("Hello Testing")
        });
    },
}
