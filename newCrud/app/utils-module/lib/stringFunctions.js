exports.is_not_empty=function( slug ) {

  if ( slug != '' && slug != null ) {

    return true;  
  } else {

    return false;
  }
}
exports.isEmptyObj=function(obj) {
  for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          return false;
  }

  return JSON.stringify(obj) === JSON.stringify({});
}
exports.makeid=function() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
exports.is_empty=function( slug ) {

  if ( slug == '' || slug == null || slug == 0 ) {

    return true;  
  } else {

    return false;
  }
}

exports.randomString =function(len, an){
  an = an&&an.toLowerCase();
  var str="", i=0, min=an=="a"?10:0, max=an=="n"?10:62;
  for(;i++<len;){
    var r = Math.random()*(max-min)+min <<0;
    str += String.fromCharCode(r+=r>9?r<36?55:61:48);
  }
  return str;
}