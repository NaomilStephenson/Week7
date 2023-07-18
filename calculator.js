'use strict'

let express = require("express");
let app = express();
const server = app.listen((4000), ()=>{
    console.log("Welcome to the MathTree server, what is your math question?");
});

app.get("/addition/:A/:B", (request, response) => {
    let num1 = parseInt(request.params.A);
    let num2 = parseInt(request.params.B);
    let result = num1 + num2;
    response.send(`The result is ${result}`);
});

app.get("/subtraction/:A/:B", (request, response) => {
    let num1 = parseInt(request.params.A);
    let num2 = parseInt(request.params.B);
    let result = num1 - num2;
    response.send(`The result is ${result}`);
});

app.get("/multiplication/:A/:B", (request, response) => {
    let num1 = parseInt(request.params.A);
    let num2 = parseInt(request.params.B);
    let result = num1 * num2;
    response.send(`The result is ${result}`);
});

app.get("/division/:A/:B", (request, response) => {
    let num1 = parseInt(request.params.A);
    let num2 = parseInt(request.params.B);
    let result = num1 / num2;
    response.send(`The result is ${result}`);
});
