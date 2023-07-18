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
        "In A While, Crocodile!",
        "Gotta Go, Buffalo!",
        "See You Soon, Raccoon!",
        "Be Sweet, Parakeet!",
        "Take Care, Polar Bear!",
        "In A Shake, Rattle Snake!",
        "Hit The Road, Mr. Toad!",
    ];
    return byeOptions[option];
};

function sayBye(request,response){
    response.send(bye());
};

app.get("/hello",(request,response)=>{
    response.send("Welcome to Nationwide!");
});

app.get("/goodbye",sayBye);
app.get("/bye",sayBye);
