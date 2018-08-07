function ProdutosDAO(connection) {
    this._connection = connection;
}

//callback nas funcoes faz com que libere o recurso e chama assim que "a query" estiver pronta, assim, com o 
//callback, não precisa esperar terminar para liberar o recurso para outro
//normalmente I/O

ProdutosDAO.prototype.lista = function(callback) {
        this._connection.query('select * from livros',callback);
}

ProdutosDAO.prototype.salva = function(produto,callback){
    this._connection.query('insert into livros set ?',produto,callback);
    //this._connection.query('insert into livros (titulo, preco, descricao) values (?, ?, ?)',  [produto.titulo, produto.preco, produto.descricao], callback);
}

module.exports = function(){
    return ProdutosDAO;
};
