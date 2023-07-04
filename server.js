const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))


app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/", function (req, res){

    const height = Number(req.body.height)/100;
    const weight = Number(req.body.weight);
    const bmi = weight / (height * height);
    res.send("Result: "+bmi.toFixed(2)+" kg/sq.cm")
})

app.listen(3000, ()=>{
    console.log("Your app started at https://localhost:3000")
})

