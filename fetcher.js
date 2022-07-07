const request = require('request');
const fs = require('fs');

// the two line arguments: URL, local file path
let requestedUrl, local;

// what we type into node
if (process.argv[2] && process.argv[3]) {
  requestedUrl = process.argv[2];
  local = process.argv[3];
}

const ourRequest = function(data) {
  request(requestedUrl, (error, response, body) => {
  if (error) {
    console.log("Uh oh! There is something wrong with that URL\n" + error);
  } else {
    data(body);
  }
});
}


