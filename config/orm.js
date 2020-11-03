// My SQl conection
const connection = require("./connection.js");

const orm = {
    selectAll: function (){
        const queryString = "SELECT * FROM burgers"

        return new Promise((resolve, reject)=> {
            connection.query(queryString, 'burgers', function(err, result){
                if (err) {
                    return reject(err)
                }

                console.log(result)
                return resolve(result)
            })
        })
    },

    insertBurger: function (burgerName) {
       const queryString = 'INSERT INTO burgers (burger_name, eaten) VALUES(?,?)';


       return new Promime((resolve, reject)=> {
           connection.query(queryString, [burger_name, false], function(err,result){

            if (err) {
                return reject(err)
            }

            console.log(result)
            return resolve(result)
           })
       })

    },

    updateBurger: function(){
        
    }


}