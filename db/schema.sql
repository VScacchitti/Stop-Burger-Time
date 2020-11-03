DROP DATABASE IF EXISTS burgertime_DB;

CREATE DATABASE burgertime_DB;

USE burgertime_DB;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    burger_name VARCHAR(255) NOT NULL,
    eaten BOOLEAN DEFAULT false
);

SELECT * FROM burgers;
