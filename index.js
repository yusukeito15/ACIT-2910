const port = process.env.PORT || 12345;
const session = require("express-session");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

var app = express();

var CLF = path.resolve(__dirname, "pages");

//create a socket server with the new server
const sv = require("http").createServer(app);
var io = require("socket.io")(sv);

//postgres
const pg = require("pg");

//database url
//var dbURL = process.env.DATABASE_URL || "postgres://postgres:123456@localhost:5432/NAMEHERE";

//use sessions
app.use(session({
    secret:"endor", //cookie handling
    resave: true,
    saveUninitialized: true
}));

app.use("/builder", express.static("build"));
app.use(bodyParser.urlencoded({
    extended:true
}));

//root folder
app.get("/", function(req, resp){
    if(req.session.name){
        console.log("User is already logged in");
        resp.sendFile(CLF+"/home.html");
    } else{
    resp.sendFile(CLF+"/home.html");
    }
});

app.get("/style", function(req,resp){
    resp.sendFile(CLF+"/pageStyle.css")
});

app.post("/logout", function(req, resp){
    req.session.destroy();
    resp.end("success");
});


//listen to the port
sv.listen(port, function(err){
    if(err){
        console.log(err);
        return false;
    }
    
    console.log(port+" is running");
});