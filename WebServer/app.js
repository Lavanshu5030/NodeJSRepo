//import .env file after installation
require('dotenv').config()
// import express after installation
const express = require('express');

// import prompt after installation
const prompt = require('prompt');

// import hbs 
const hbs = require('hbs');

// import path module
const path = require('path');

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;
const user = process.env.USER;
const userid = process.env.USERID;
const password = process.env.PASSWORD;


//Use of express.static middleware
app.use(express.static(__dirname + "/public/"))

// create path for template engine
const viewPath = path.join(__dirname, "/template/views");
const partialPath = path.join(__dirname,"/template/partials");

// Use of hbs template engine
app.set('view engine', 'hbs');
app.set("views", viewPath);

//Use of partial path
hbs.registerPartials(partialPath);



app.get("/index", (req, res) => {
  //res.send("My server created successfully");
  //res.sendFile(__dirname + "/public/html/")//if you are not difining file name it will take index.html file by default
  res.render("index",{
    title:"title index page",
    developer:"Lavanshu Deshmukh",
    company:"Google"
  });//here index is template engines name without hbs
});

app.get("/contact", (req, res) => {
  //res.send("My server created successfully");
  //res.sendFile(__dirname + "/public/html/contact.html");
  res.render("contact",{
    title:"Title Contact page",
    developer:"Sourabh Gaikwad",
    company:"Amazon"
  });
})
app.get("/about", (req, res) => {
  //res.send("My server created successfully");
  //res.sendFile(__dirname + "/public/html/about.html");
  res.render("about",{
    title: "Title about page",
    developer:"Karan singh",
    company: "Oracle"
  });

})
app.get("/gallery", (req, res) => {
  //res.send("My server created successfully");
 // res.sendFile(__dirname + "/public/html/gallery.html");
  res.render("gallery",{
    title:"Title Gallery Page",
    developer:"Gaurav",
    company:"bookmy show"
    
  });

})

app.get("/service", (req, res) => {
  //res.sendFile(__dirname + "/public/html/service.html");
  res.render("service",{
    title:"Title service Page",
    developer:"Gaurav",
    company:"bookmy show"
    
  });

});
app.get("/404page", (req, res) => {
 // res.sendFile(__dirname + "/public/html/service.html");
  res.render("404page",{
    title: "404 page title",
    developer:"Shashwat Sharma",
    company: "Microsoft"
  });

});

app.get("/**", (req, res) => {
  res.send("404...Page Not Found");
});

// prompt.start();

//   //
//   // Get two properties from the user: username and email
//   //
//   prompt.get(['username', 'password'], function (err, result) {
//     //
//     // Log the results.
//     //
//     if(userid == result.username && password == result.password){
//       app.listen(port,(req,res)=>{
//         console.log(`Welcome user:${user}`);
//       })
//     }
//   });

// prompt.get(['userid', 'password'], function (err, result) {
//   //
//   // Log the results.
//   //

//   if(userid==result.uid && password==result.pass)
//   {

//       app.listen(port,()=>{
//           console.log(`Login User Is:${user}`);
//           console.log(`Server get Started on ${host}:${port}`);

//       });
//   }
//   else
//   {
//       console.log("Wrong Credential , You are Not Valid User");
//   }

// });
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['username', 'email'], function (err, result) {
  //
  // Log the results.
  //
  console.log('Command-line input received:');
  console.log('  username: ' + result.username);
  console.log('  email: ' + result.email);
});

// To check our server is running or not for testing purpose onlu
app.listen(port, () => {
  console.log("Server is started");
})