var parser = require('parse-multipart');
//looks like a node method, see what parse-multipart does

module.exports.getBoundary = function(buffer) {
  var finder = /--(----\w+)\b/; //actually this might be a regular expression?
  var boundary = buffer.toString().match(finder);
  return boundary ? boundary[1] : null;
};

//Google right side of line 5 and buffers, 
//looks looks like permissions of some kind and escape characters? w+ looks like linux for able to write
//line 6 takes input buffer, turns it into a string and tries to match it to what's on line 5


module.exports.parse = function(buffer) {
  var boundary = module.exports.getBoundary(buffer);
  return parser.Parse(buffer, boundary);
};

/*
Sometimes you only have access to the raw multipart payload
and it needs to be parsed in order to extract the files or data contained on it. 
As an example: the Amazon AWS ApiGateway, which will operate as a facade between 
the http client and your component 
(the one written by you designed to extract the uploaded files or data).

*/

module.exports.getFile = function(buffer) {
  var parts = module.exports.parse(buffer);
  for (var part of parts) {
    // return first part with filename and data keys
    if (part.filename && part.data) {
      return part;
    }
  }
  return null;
};


//available methods appear to be
//
//
//getBoundary -
//getFile
//parse
