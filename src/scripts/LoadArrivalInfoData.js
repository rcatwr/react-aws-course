var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
  region: "us-west-2"
});

console.log("Writing entries to ArrivalInfo table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var galleryImagesData = 
  JSON.parse(fs.readFileSync('../components/data/arrival_info.json', 'utf8'));

galleryImagesData.forEach(function(info) {
 

  var params = {
    TableName: "ArrivalInfo",
    Item: {
      "title": info.title,
      "text": info.text,
      
    }
  };

  dynamodb.put(params, function(err, data) {
    if (err)
      console.error("Unable to load data into table for gallery images",
                    info.text, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", info.text, "to table.")
  });
});