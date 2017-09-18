var express = require('express');
var http = require('http');
var fs = require('fs');
var server = http.createServer();
var app = express();
var twilio = require('twilio');
var client = twilio('AC6d3a142f22da458838816fe726fe3a57', '45dfd133e5d982b8c9abe9f4ab237704');



////////START THE SERVER//////////
server.on('request', app);
server.listen(3001, function () {
 console.log('Server on.');
 sendText('+12035438737', '+12035438737', 'LOOKING OUT FOR HACKERS!!');
});






///////TEXT MESSAGING ///////////
function sendText(to,from,msg) {
  client.messages.create({
      to: to,
      from: from,
      body: msg
  }, function(error, message) {
      if (!error) {
          console.log('Success! The SID for this SMS message is:');
          console.log(message.sid);

          console.log('Message sent on:');
          console.log(message.dateCreated);
      } else {
          console.log('Oops! There was an error.', error);
      }
  });
}

app.post('/laundry', function(req, res, next) {
  console.log('Alert received');
  sendText('+12035438737', '+12035438737', 'Your camera has been activated :)');
});
