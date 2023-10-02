const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.get("/", function (req, res) {
   // res.send("hi");
    res.sendFile(__dirname + "/index.html");// will give file path __dirname
});

app.get("/bmiCalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");// will give file path __dirname
});

app.use(bodyparser.urlencoded({ extended: true })); //poosting is done encoded --> text jason are also some ways

app.post("/", function (req, res)
{
    //res.send("thanks for posting and sending message to our server's home page")
    var a = Number(req.body.num1);
    var b = Number(req.body.num2);
    var result = a + b;
    res.send("the sum of no. is" + result);
})


app.post("/bmiCalculator", function (req, res)
{
    var weight = parseFloat(req.body.w);
    var height = parseFloat(req.body.h);
    var bmi = weight / (height * height);
    res.send("Your Bmi is " + bmi);
})

app
app.listen(3000, function () {
    console.log("server running.....");
});