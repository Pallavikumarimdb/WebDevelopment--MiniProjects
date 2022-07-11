const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv/config');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));


// IMPORT ROUTES //
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


// // ROUTES //
// app.use('/', (req, res) => {
//   res.send("we are on homePage");
// });


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})


app.post("/", function(req, res){



})




//CONNECTION TO DATABASE MONGODB ATLUS//
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () =>
console.log("Connected to dbs"));


mongoose.connection.on('error', err=> {
  console.log('connection failed');
})

mongoose.connection.on('connected', connected => {
  console.log('connection successful');
})


/////////////////////////////////////////////////////////////////


app.listen(3000, function() {
  console.log(" Server is up and Running on port 3000");
})
