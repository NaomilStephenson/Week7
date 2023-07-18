'use strict'

let express = require("express");
let app = express();
const server = app.listen((4000), ()=>{
    console.log("Welcome to Nationwide server, we are listening...");
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

app.get("/hello",(request,response)=>{
    response.send("Welcome to Nationwide!");
});

app.get("/bye",(request,response)=>{
    response.send(bye());
});
