# a-synchronous-swim
This is a project I completed as a student at [hackreactor](http://hackreactor.com). This project was worked on with a pair.

# SPRINT: A Synchronous Swim

Your synchronized swim team is ready to take commands from you! Right now, they can only hear your commands when issued from within the client. They'll be a better team if they can receive your commands when you are away from the client too. Your goal is to make both the server program and client program coordinate the activities of the swim team.

**Goals**

* Learn how to work with two different programs and get them to coordinate with each other
* Gain more experience with asynchronous behaviors through the use of keyboard events and network events
* Achieve a deeper understanding of how client and server systems interact with each other through CORS, uploading of files, requests, and responses.
* Learn to write tests, use binary data, buffers, as well as reading and writing files to the hard drive.

**Repo and Program Structure**

This repo contains two programs -- one that lives in the client folder and one that lives in the server folder. Both programs are started from the terminal so you'll need two terminal windows to run these programs. Each program has its own package.json file and must have its dependencies installed separately. The two programs are currently not connected in any way, but both can do interesting things.

The client program displays the swim team and their movements. It can accept commands (via the left/right/up/down arrow keys), and the swim team follows the commands that are received.

The server program can accept directional commands from the keyboard using the arrow keys, or by typing the command out in full ("up"/"down"/"left"/"right") and pressing enter. When a valid command is received, the command is displayed on the screen and all others are ignored.

**Starting the programs**

Both programs can be started with npm start in development mode. This runs the client using live-server so that code changes automatically refresh the browser. The server runs using nodemon, so that code changes cause automatic reloads.

When you are ready to get more interactive, start the server using npm run server -- this will run the server without nodemon. When running using nodemon, you'll need to press enter after each swim command (both arrow keys and written commands). Without nodemon, arrow commands will behave more responsively. To understand the difference, try running the server using each of the two methods before you start coding.

# Bare Minimum Requirements

All swim commands are in the form of the strings: 'up' 'down' 'left' 'right'. Swim commands can be sent to SwimTeam.move() in the client. Give it a try by opening up the console and sending the team some commands!

* Write a test to verify the server can issue a random command using a GET request. Then write the functionality that implements this feature.
* Connect the client to the server. Using AJAX, request a random swim command from the server. Confirm your swim team is moving around randomly.
* Refactor the server program so that instead of responding with random commands, the user's keypress or typed commands are sent in response. Keep your tests passing so be sure to update previously written test(s) to match this change.
* Add a background image to the pool! For basic requirements, this feature should only support JPEG images. The file, ./background.jpg, is designated as the file for storing a background image in your server. For your convenience, this file is gitignored and configured for use in your source files. Sample images are provided in the spec folder.
  * If the background file isn't present, the server should return a 404. If the file is present, the file should be sent in response to a client request for it. A test for the 404 scenario is mostly complete; enable the test (change xit to it) and fill in the blanks. Then write the test for the success case.
  * Modify your GET handler to also respond to requests for a background image. Your background image tests should now be passing.
  * Be sure to update prior tests and the app code as needed to complete the feature and not break any prior features. Copy one of the images from the spec folder, then reload your client to confirm your background image is loaded correctly.
* Next, add the ability for your server to accept an upload for a custom background image.
  * Write a test to verify your POST request can accept an uploaded file. Then write the post request HTTP handler. Be sure to read and understand how node accepts file uploads via POST requests using the data and end events. The file that is received during the upload should replace (overwrite) whatever is currently at ./background.jpg.
  * Next, write a test to show the previously posted file can be retrieved via subsequent GET. This test is similar but complementary to the prior test you wrote for your GET background route.
* The last and final step will be to add a file picker and AJAX file uploader to your client app. This will be challenging and will require you to understand multipart file formats which are used to upload data from a form to a server -- see the included reference material.
  * Add a form to your client page with a file picker and a submit button.
  * Add an event handler that will take the selected file and upload it to POST API of your server using AJAX. Carefully follow the instructions in the blog post listed below. You will need to make changes to your API as you contend with the nuances of this exercise. Be sure to refactor your tests as needed, keeping both your tests suite and in top working order.

**Advanced Content**

* Support another image format besides JPEG, such as PNG.
Improve the performance of your file operations by using read and write streams.
* Remove live-server: Refactor the client and server programs so that the server can serve up the client files.
* Add more granularity to the directional commands. Allow the swimmers to move more than 90-degree angles.
* Add the ability to issue higher-level commands, such that the swim team can execute complex sequences instead of individual moves.
* Replace the AJAX with Web Sockets. Web Sockets improve efficiency in client-server communication, because the connection stays open indefinitely, allow many commands to be sent from the server to the client. Don't forget to handle re-connections.

**Nightmare Mode***

* Refactor the swim team to make use of D3 animations and transitions, so the swimmers look is more life-like.
* Turn this into a multi-player experience, where each swimmer can connect to a server and receive independent server commands.
* Deploy to Digital Ocean.

**Relevant Documentation**
* [Intro to Node.js](https://nodejs.dev/)
* [Error First Callback Pattern](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)
* [Jest testing framework](https://jestjs.io/docs/en/getting-started)
* [Same Origin Policy and CORS](https://en.wikipedia.org/wiki/Same-origin_policy)
* [Options Requests](http://zacstewart.com/2012/04/14/http-options-method.html)
* [Responding with a file](https://stackoverflow.com/questions/10046039/nodejs-send-file-in-response)
* [Handling POST data in Node](https://docs.nodejitsu.com/articles/HTTP/servers/how-to-read-POST-data/)
* [jQuery AJAX API](http://api.jquery.com/jquery.ajax/)
* [XHR upload of a single file](https://thoughtbot.com/blog/ridiculously-simple-ajax-uploads-with-formdata)
* [Multi-part Form Data](https://codeburst.io/how-to-handle-multipart-form-data-in-nodejs-file-uploading-in-nodejs-26c0cb88adcfhttps://codeburst.io/how-to-handle-multipart-form-data-in-nodejs-file-uploading-in-nodejs-26c0cb88adcf)
* [What are Node Buffers](https://www.freecodecamp.org/news/do-you-want-a-better-understanding-of-buffer-in-node-js-check-this-out-2e29de2968e8/)
* [Module node API](https://nodejs.org/api/modules.html)
* [Response docs](http://nodejs.org/api/http.html#http_class_http_serverresponse)
* [Request docs](http://nodejs.org/api/http.html#http_http_incomingmessage)
* [querystring Node module](https://nodejs.org/api/querystring.html)
* [File System node API](https://nodejs.org/api/fs.html)
* [Buffer node API](https://nodejs.org/api/buffer.html)
* [Stream node API](https://nodejs.org/api/stream.html)
* [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
* [HTTP headers fields](http://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
