var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2"
});

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: "FooterLinks",
  KeySchema: [
    // Partition Key
    { AttributeName: "href", KeyType: "HASH" },
    // Sort Keys
    { AttributeName: "src", KeyType: "RANGE"}  
  ],
  AttributeDefinitions: [
    { AttributeName: "name", AttributeType: "S" },
    { AttributeName: "href", AttributeType: "S" },
    { AttributeName: "src", AttributeType: "S" }
  ],
  LocalSecondaryIndexes: [
    {
      IndexName: "NameIndex",
      KeySchema: [
        { AttributeName: "href", KeyType: "HASH" },
        { AttributeName: "name", KeyType: "RANGE" }
      ],
      Projection: {
        ProjectionType: "KEYS_ONLY"
      }
    }
  ], 
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

dynamodb.createTable(params, function(err, data) {
  if (err)
    console.error("Unable to create table: ", JSON.stringify(err, null, 2))
  else
    console.log("Created table with description: ", JSON.stringify(data, null, 2))
});