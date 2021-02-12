var mongoModule = require('mongodb');
//2 ->create mongodbobject
var mongoObject=mongoModule.MongoClient;

//3 -> create database
//prepare database url
var dburl = "mongodb://localhost:27017/balaji";
mongoObject.connect(dburl,function(err,x)
{
    if(err)
    {
        console.log('connection error');
        throw err;
    }
    //step4 ->create database object
    var versity = x.db();
    //step5  ->insert row(document) in table(collection)
    //prepare document
    var s1 = { "name":"johnDoe",
    "emai": "johndoe@example.com",
    "roomType": "Deluxe",
    "arrivalDate": "2020-07-21T02: 24: 10.624Z",
    "depatureDate": "2020-07-25T02: 24: 10.624Z",
    "numberofGuests": 3,
    "freePickup":"false",
    "flightNumber": "987643812L",
    "specialRequest": "Need a premium cab facility"
  };
    versity.collection("customer").insertOne(s1,function(err,res)
    {
        if(err)
        {
            console.log("some database error");
            throw err;
        }
        console.log("one document added into  collection");
        x.close();
    })
})