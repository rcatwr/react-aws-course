var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
  region: "us-west-2"
});

console.log("Writing entries to FooterLinks table.");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var footerLinksData = 
  JSON.parse(fs.readFileSync('../components/data/footer_links.json', 'utf8'));

footerLinksData.forEach(function(links) {
 

  var params = {
    TableName: "FooterLinks",
    Item: {
      "href": links.href,
      "src": links.src,
      "name": links.name,
      
    }
  };

  dynamodb.put(params, function(err, data) {
    if (err)
      console.error("Unable to load data into table for footer links",
                    links.href, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", links.href, "to table.")
  });
});