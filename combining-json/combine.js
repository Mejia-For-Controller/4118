const sean1 = require('./inputs/sean-dec-8-4118.json');
const kyler1 = require('./inputs/kyler-dec-8-4118.json');
const kyleroriginal = require('./inputs/features.json');
const editJsonFile = require("edit-json-file");
var fs = require('fs');
// If the file doesn't exist, the content will be an empty object by default.
let file = editJsonFile(`${__dirname}/features.json`);

var arrayOfFiles = [sean1,kyler1,kyleroriginal]

var locations =  {
    features:  [],
    type: "FeatureCollection"
  }
  
arrayOfFiles.forEach((eachFile, itemIndex) => {
    console.log(itemIndex + " has " + eachFile.features.length + " locs")
    locations.features = [...locations.features, ...eachFile.features]
})

console.log(locations.features.length)

var jsonData = JSON.stringify(locations);
fs.writeFile("features.json", jsonData, function(err) {
    if (err) {
        console.log(err);
    }
});