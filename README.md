<h1>NodeJS</h1>

-npm install

-sudo npm install -g nodemon


docker pull mysql<br>
docker run --name db -e MYSQL_ROOT_PASSWORD=mysql -d mysql:5.7.23<br>
(para facilitar usar mysql-workbensh)<br>
windwos - docker run -p 3306:3306 --name db -e MYSQL_ROOT_PASSWORD=mysql -d mysql:5.7.23 <br>

Terminal - mysql -h localhost -u root -p <br>
create database casadocodigo_nodejs;<br>
use casadocodigo_nodejs;<br>
CREATE TABLE livros (
id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
titulo varchar(255) DEFAULT NULL,
descricao text,
preco decimal(10,2) DEFAULT NULL);<br>

insert into livros(titulo, descricao, preco)
values ('Comecando com nodejs', 'livro introdutório sobre nodejs', 39.90);<br>
insert into livros(titulo, descricao, preco)
values ('Comecando com javascript', 'livro introdutório sobre javascript', 39.90);<br>
insert into livros(titulo, descricao, preco)
values ('Comecando com express', 'livro introdutório sobre express', 39.90);<br>

nodemon app<br>


<br>
Rodar os Testes:<br>
node node_modules/mocha/bin/mocha<br>
Criar Banco de teste<br><br>
create database casadocodigo_nodejs_test;<br>
NODE_ENV=test node_modules/mocha/bin/mocha
