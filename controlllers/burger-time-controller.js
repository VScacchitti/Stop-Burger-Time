const express = require("express");
const router = express.router();
// Import model to use its Database Functions
const burger = require("../model/burger.js")



router.get("/", function (req, res){
    burger.all(function(data){
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    });
});

router.post("/api/burgers", function(req,res){
    burger.create(["name", "eaten"], [req.body.name, req.body.eaten], function(result){
        
        //send back id of new burger
        res.json({id: result.insertID });
    });
});

router.put("/api/burgers/:id", function(req,res){
    let condition = "id =" + req.params.id;

    console.log("condition", condition);


    burger.update(
        {
            eaten: req.body.eaten
        },
        condition,
        function(result){
            if (result.chnagedRows === 0){
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});


//Exports routes for the server to use
module.exports = router;