'use strict'

const express = require("express");
const app = express();
const server = app.listen((4000), ()=>{
    console.log("Welcome to Nationwide server, we are listening...");
});

const bodyParser = require("body-parser");

server.requestTimeout(bodyParser());
server(bodyParser.urlencoded({ extended:true}));    //add if extracting data from HTML form


app.get("/hello",(request,response)=>{
    response.send("Welcome to Nationwide!");
});

let bye = () => {
    let option = Math.floor(Math.random()*8);
    let byeOptions = [
        "See You Later, Alligator!",
        "After A While, Crocodile!",
        "Gotta Go, Buffalo!",
        "See You Soon, Raccoon!",
        "Be Sweet, Parakeet!",
        "Take Care, Polar Bear!",
        "In A Shake, Garter Snake!",
        "Hit The Road, Happy Toad!"
    ];
    return byeOptions[option];
};

app.get("/bye",(request,response)=>{
    response.send(bye());
});