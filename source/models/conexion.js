const mysql = require("mysql");
var sqlConnecion = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"1234",
    database:"sistemas" 
});

sqlConnecion.connect(function(err){
    if(err){
        console.log(err.message);
    }
    else{
        console.log("Se conecto con exito");
    }

});

module.exports = sqlConnecion;
