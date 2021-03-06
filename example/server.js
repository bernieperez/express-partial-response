'use strict';


var express = require('express'),
  partialResponse = require('../'),
  app = express();


// Use the Partial Response middleware
app.use(partialResponse());

// Root route returns JSON
app.get('/', function (req, res, next) {
  res.json({
    firstName: 'Mohandas',
    lastName: 'Gandhi',
    aliases: [
      { firstName: 'Mahatma', lastName: 'Gandhi' },
      { firstName: 'Bapu' }
    ]
  });
});

// Start the server
app.listen(4000, function () {
  var prefix = 'curl \'http://localhost:4000?fields=%s\'';
  console.log('Server runnong on :4000, try the following:');
  console.log(prefix, '*');
  console.log(prefix, 'lastName');
  console.log(prefix, 'firstName,aliases(firstName)');
});