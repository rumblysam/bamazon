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
    start();
})

var start = function(){
    inquirer.prompt({
        name:"products",
        type:"rawlist",
        message:"What would you like to do?",
        choices:["BUY","CheckOut"]
    }).then(function(answer){
        if(answer.products.toUpperCase()=="BUY"){
            buyItem();
        } else {
            //sellItem();
        }
    })
}

var buyItem = function(){
    connection.query("SELECT * FROM products", function(err,res){
        //console.log(res);
        inquirer.prompt({
            name:"choice",
            type:"list",
            choices: function(value){
                var choiceArray = [];
                for(var i=0;i<res.length;i++){
                    choiceArray.push(res[i].product_name +
                    " price: " + res[i].price + " qty: " + res[i].stock_quantity);
                }
                return choiceArray;
            },
            message:"What would you like to buy?"
        }).then(function(answer){
            for(var i=0;i<res.length;i++){
                if(res[i].product_name==answer.choice){
                    var chosenItem = res[i];
                    inquirer.prompt({
                        name:"qty",
                        type:"input",
                        message:"how many would you like to buy?",
                        validate: function(value){
                            if(isNaN(value)==false){
                                return true;
                            } else {
                                return false;
                            }
                        }
                    }).then(function(answer){
                        if(chosenItem.stock_quantity < parseInt(answer.qty)){
                            connection.query("")
                        }
                    })
                }
            }
        })
    })
}
