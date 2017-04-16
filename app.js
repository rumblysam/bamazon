var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    database:"bamazon"
})

connection.connect(function(err){
    console.log("Connected as id: "+connection.threadId);
})

var start = function(){
    inquirer.prompt({
        name:"products",
        type:"rawlist",
        message:"What would you like to do?",
        choices:["BUY","SELL"]
    }).then(function(answer){
        if(answer.products.toUpperCase()=="BUY"){
            //buyItem();
        } else {
            //sellItem();
        }
    })
}
