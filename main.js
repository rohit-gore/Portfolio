const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  // res.sendFile(__dirname + "/index.html");
  res.render("home");
})

app.get("/intro",function(req,res){
  res.render("intro");
})

app.get("/contacts",function(req,res){
  res.render("contacts");
})


app.listen(3000,function(){
  console.log("server is running at port: 3000");
})
