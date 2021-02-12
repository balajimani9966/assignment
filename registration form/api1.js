//load express module
var expressModule = require('express');
//create express object
var expressObject = expressModule();
//load mongodb module
var mongodbModule = require('mongodb');
//create mongodb object
mongoDbObject = mongodbModule.MongoClient;
var empList;

var bodyParser = require("body-parser");
expressObject.use(bodyParser.urlencoded({ extended: false }));
expressObject.use(bodyParser.json());

var url = "mongodb://localhost:27017/balaji";
mongoDbObject.connect(url, function (err, connection) {
    if (err) throw err;
    console.log("Database created!");
    //create database object
    dbObject = connection.db("balaji");
})
expressObject.get("/home",function(req,res)
{
    res.sendFile("C:/balaji/qn1.html")
})
expressObject.get("/",function(req,res)
{
    res.sendFile("C:/balaji/home.html")
})
//create api ->return mock-data
//get function of expressObject can process http get request 
expressObject.get('/getemployees', function (req, res) {
    
    dbObject.collection("customer").find({}).toArray(function (err, result) {
        if (err) throw err;
        empList = result;
        console.log(empList);
        res.send(empList);
    });

});

//create server using express object
var server = expressObject.listen(6050, function () {
    console.log('Node server is running..');
});