//jshint esversion:6

const express = require("express");
const bodyPasser = require("body-parser");
const app = express();
app.use(bodyPasser.urlencoded({extended: true}));

app.listen("3000", function(){
    console.log("Starting in port 3000");
});

app.get("/", function(req , res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/" , function(req , res){
    var first = Number(req.body.n1);
    var second = Number(req.body.n2);
    var result = first+second;
    res.send("The result is: " + result);
});