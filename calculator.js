//jshint esversion:6

const express = require("express");
const bodyPasser = require("body-parser");
const app = express();
app.use(bodyPasser.urlencoded({extended: true}));

app.listen("3000", function(){
    console.log("Starting in port 3000");
});

//plus
app.get("/", function(req , res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/" , function(req , res){
    var first = Number(req.body.n1);
    var second = Number(req.body.n2);
    var result = first+second;
    res.send("The result is: " + result);
});

//Bmi value
app.get("/bmiCalculator" , function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator" , function(req,res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var bmi = weight/(height*height);
    res.send("Your BMI is : " + bmi);
})

//multiply
app.get("/multiply" , function(req,res){
    res.sendFile(__dirname + "/multiply.html");
});

app.post("/multiply" , function(req,res){
    var num1 = Number(req.body.number1);
    var num2 = Number(req.body.number2);
    var value = num1*num2;
    res.send("Value is : " + value);
});