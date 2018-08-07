var mysql  = require('mysql');

var connectMYSQL = function() {
    if(!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: '192.168.99.100',
            user: 'root',
            password: 'mysql',
            database: 'casadocodigo_nodejs'
        });
    }

    if(process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database:'casadocodigo_nodejs_test'
        });
    }
}

module.exports = function() {
    return connectMYSQL;
}
