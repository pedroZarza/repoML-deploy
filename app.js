const express = require("express");
const app  = express();
const path = require("path");




app.use(express.static("public"));

app.listen(3000, ()=>{
    console.log("servidor corriendo en puerto 3000");
})

app.get("/", (req, res)=>{
    res.sendFile(path.resolve("./views/home.html"));
})


app.get("/register", (req, res)=>{
    res.sendFile(path.resolve("./views/register.html"));
})


app.get("/login", (req, res)=>{
    res.sendFile(path.resolve("./views/login.html"));
})