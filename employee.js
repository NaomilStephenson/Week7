'use strict'

const express = require("express");
const app = express();
const server = app.listen((4000), ()=>{
    console.log("The Employee Database is running...");
});

app.get("/", (request,response) => {
    response.write("<h1> <centre> Welcome to the Employee Database </centre> </h1>");
    response.write("<b> List of departments</b><br />");
    response.write("<a href='/department/1'>HR department</a><br />");
    response.write("<a href='/department/2'>IT department</a><br />");
    response.write("<a href='/department/3'>Sales department</a><br />");
});

app.get("/department/:id",(request,response) => {
    let dept = request.params.id;
    let deptName;
    if (dept == "1") {
        deptName ="HR department";
    };
    if (dept == "2") {
        deptName ="IT department";
    };
    if (dept == "3") {
        deptName ="Sales department";
    };
    response.write(`<h1> <centre> ${deptName} </centre> </h1>`);
    response.write("<a href='/'>Back</a><br />");
});

