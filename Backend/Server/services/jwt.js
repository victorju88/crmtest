var njwt = require('njwt');
var config = require('../config/config');
var secret = config.token_secret;
exports.createToken=(usuarios)=>{
    var params={
        sub:usuarios.id_usuario,
        usuarios:usuarios.usuario,
        id_rol:usuarios.id_rol
    }

var jwt=njwt.create(params,secret);
var t = new Date();
t.setHours(t.getHours()+5);
jwt.setExpiration(t);
var token = jwt.compact();
return token;
}
