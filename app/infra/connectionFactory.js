var mysql  = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: '172.17.0.3',
        user: 'root',
        password: 'mysql',
        database: 'casadocodigo_nodejs'
    });
}

module.exports = function() {
    return createDBConnection;
}
