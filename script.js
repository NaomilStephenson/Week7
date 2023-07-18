let express = require("express");
let app = express();
const server = app.listen((4000), ()=>{
    console.log("welcome to Nationwide server, we are listening...");
});

app.get("/hello",(request,response)=>{
    response.send("Hay there - nice day!");
});

app.get("/bye",(request,response)=>{
    response.send("See ya later, Aligator!");
});