<h1>NodeJS</h1>

npm install

sudo npm install -g nodemon

docker run -it --name db -e MYSQL_ROOT_PASSWORD=mysql -p 3306:3306 -d mysql/mysql-server:latest

docker exec -it my-mysql bash
mysql -uroot -p

create database casadocodigo_nodejs;
use casadocodigo_nodejs;
CREATE TABLE livros (
id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
titulo varchar(255) DEFAULT NULL,
descricao text,
preco decimal(10,2) DEFAULT NULL);

insert into livros(titulo, descricao, preco)
values ('Comecando com nodejs', 'livro introdutório sobre nodejs', 39.90);
insert into livros(titulo, descricao, preco)
values ('Comecando com javascript', 'livro introdutório sobre javascript', 39.90);
insert into livros(titulo, descricao, preco)
values ('Comecando com express', 'livro introdutório sobre express', 39.90);

nodemon app
