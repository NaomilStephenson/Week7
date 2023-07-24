const express = require('express');                                  // Load dependencies
const mySQL = require('my-sql');
const ejs = require('ejs');

const app = express();                                               // Instanciate dependencies as functions

const server = app.listen((4000),() => {                             // Start server, Define port as 4000 and send confirmation to console
    console.log(`Server is listening…`);
});

const db = mySQL.createConnection({                                  // Create connection path/crednetials to Game Store dtb
    host: "localhost",
    user: "root",
    password: "root",
    databse: "gamestore"
});

db.connect();                                                        // Connect to Game Store dtb

app.get("/products",(request, response) => {                         // Return Products to requestor
        db.query("SELECT * FROM Product;",(err, products) => {                    
        response.write("<h1> <centre> Products List </centre> </h1>");
        response.write(products);
        response.end;
    });
});


// app.get("/",(request, response) => {
//     response.write("Hello");                                    // Can 'write' as many lines as require...
//     response.write("World");
//     response.write("...");
//     response.end();                                             // Only when you put 'end' will this send the response
// });

// app.get("/home",(request, response) => {                        // Single Path Function
//     response.send("Hello");
// });

// app.get(["/home","/welcome"],(request, response) => {           // Multiple Path function
//     response.send("Hello");
// });