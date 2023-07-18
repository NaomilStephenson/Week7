'use strict'

const express = require("express");
const app = express();
const server = app.listen((4000), ()=>{
    console.log("The Employee Database is running...");
});
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));   //add if extracting data from HTML form
app.post("/process",(request,response)=>{
    let name = request.body.name;
    let salary = parseInt(request.body.salary);
    let dept = request.body.dept;
    let tax = 0;
    if( salary < 1000){
        tax = 0;
    } else if ( salary >= 1000 && salary <= 2000 ) {
        tax = salary * 16/100;
    } else {
        tax = salary *21/100;
    }
    response.write(`<h1> <centre> Salary Slip of: ${name}</centre></h1>`)
    response.write(`Salary: ${salary}<br />`)
    response.write(`Tax: ${tax}<br />`)
    response.write(`Department: ${dept}<br />`)
    response.end()
});