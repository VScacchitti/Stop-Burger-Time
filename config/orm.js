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

    
}