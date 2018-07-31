var app = require('./config/express')();

app.listen(3000, function() {
    console.log("servidor rodando: localhost:3000");
})
