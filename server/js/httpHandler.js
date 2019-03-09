const fs = require('fs');
// node method for reading file system

const headers = require('./cors');
console.log(headers);
//this comes from the cors.json, might be some issue with the filepath 

const multipart = require('./multipartUtils.js'); //added.js to the end since missing
//from the js file
// note: none of the methods from multiPartUtils are used here

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = './background.jpg';
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {  // note: next is never read
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  //prints out the request type, method, and url it came from

  // if (req.method === "GET"){              ///"GET, POST, PUT, DELETE, OPTIONS"
  //   return //random left,right,up,down
  // }

  res.writeHead(200, headers);
  //router directs traffic, looks like a status code and maybe some kind of headers response?
  res.end();
  //end response?
};

//To lookup:
  // prin
  //
  // .writehead, *seems like a status code*
  //  .end()