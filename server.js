const express = require("express");
const exphbs = require("express-handlebars");
//imports routes from controller
const routes = require("./controllers/burgertime_controller.js")


//Set up Express app

const app = express();
//process.env lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

//Set up middleware to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static directory
app.use(express.static("public"));

//Using the contorller
app.use(routes)

//Sets Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.listen(PORT, function(){
    console.log(`Sever is listening on: http://localhost:${PORT}`)
  })