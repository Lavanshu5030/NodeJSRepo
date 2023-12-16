const express = require('express');
//importing .env file
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const user = process.env.USER;
const host = process.env.HOST;

app.get("/", (req, res) => {
    // res.send("This is simple get request for /");
    res.sendFile(__dirname+"/index.html");
});

app.get("/about", (req, res) => {
    res.send("<html><body><h1>This is simple get request for about</h1></body></html>");
});

app.get("/home", (req, res) => {
    res.send("This is simple get request for home");
});

app.get("/contact",(req,res)=>{
    res.send("This is simple get request for contact");
    });

app.listen(9999, () => {
    console.log("Server get started");
    console.log(`server get started  on ${host}:${port}`);
});

