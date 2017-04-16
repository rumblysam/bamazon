CREATE DATABASE IF NOT EXISTS bamazon;

USE bamazon;

CREATE TABLE IF NOT EXISTS products (
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT(100),
    PRIMARY key (item_id)
);

INSERT INTO products (product_name, department_name,price,stock_quantity)
    values ('potion','potions','200','100'),
    ('super potion','potions','700','50'),
    ('hyper potion','potions','1500','10'),
    ('full restore','potions','3000','5');
