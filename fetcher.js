const request = require('request');
const fs = require('fs');

// the two line arguments: URL, local file path
let requestedUrl, localPath;

// what we type into node
if (process.argv[2] && process.argv[3]) {
  requestedUrl = process.argv[2];
  localPath = process.argv[3];
}

// our request function
const ourRequest = function(requestData) {
  request(requestedUrl, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.log("Uh oh! There is something wrong with that URL\n" + error);
  } else {
    requestData(body)
  }
});
}

// writes requested data to a local file
const writeToPath = function(data) {
  fs.writeFile(localPath, data, error => {
    if (error) {
      console.log('Oh no! Something went wrong writing to local file!\n' + error)
    } else {
      console.log(`Downloaded and saved ${fs.statSync(localPath).size} bytes to ${localPath}`)
    }
  })
}

// call our HTTP request
ourRequest(writeToPath);

