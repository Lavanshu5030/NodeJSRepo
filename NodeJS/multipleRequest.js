//importing expressjs
const express = require('express');
//importing .env file
require('dotenv').config();
//calling function
const app = express();

const port = process.env.PORT;
const user = process.env.USER;
const host = process.env.HOST;

app.get("/product", (req, res) => {
    res.send("<html><body><h1>This is simple get request for get Request </h1></body></html>");
});

app.post("/product", (req, res,next) => {
    res.send("<html><body><h1>This is simple get request for Post Request </h1></body></html>");
});

app.put("/product", (req, res,next) => {
    res.send("<html><body><h1>This is simple get request for Put Request </h1></body></html>");
});

app.delete("/product", (req, res,next) => {
    res.send("<html><body><h1>This is simple get request for Delete Request </h1></body></html>");
});

app.listen(port, () => {
    //console.log("Server get started");
    console.log(`server get started  on ${host}:${port}`);
});

