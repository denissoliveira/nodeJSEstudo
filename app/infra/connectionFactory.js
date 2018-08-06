var mysql  = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: '192.168.99.100',
        user: 'root',
        password: 'mysql',
        database: 'casadocodigo_nodejs'
    });
}

module.exports = function() {
    return createDBConnection;
}
