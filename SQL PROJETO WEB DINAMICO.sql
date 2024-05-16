create database if not exists viagem;
use viagem;
show databases;

CREATE TABLE if not exists viagem (
  id_viagem int NOT NULL auto_increment,
  FullName varchar(30) NOT NULL,
  Locais varchar(40) NOT NULL,
  Email varchar(30) NOT NULL,
  phoneNumber integer NOT NULL,
  Price int NOT NULL,
  Hotel varchar(40) NOT NULL,
  gender varchar(30) NOT NULL,
  PRIMARY KEY (id_viagem)
);


INSERT INTO viagem (FullName, Locais, Email, phoneNumber, Price, Hotel, gender)
VALUES
('Nome','França','alo@gmail.com','99876644','299','Royal Palm','M'),
('Maria Silva','Paris','maria@gmail.com','987654321','400','Grand Hotel','F'),
('João Pereira','Nova York','joao@gmail.com','123456789','600','Luxury Suites','M'),
('Ana Oliveira','Tóquio','ana@gmail.com','111222333','800','City View Inn','F'),
('Carlos Santos','Londres','carlos@gmail.com','555666777','700','Royal London Hotel','M');


select * from viagem;