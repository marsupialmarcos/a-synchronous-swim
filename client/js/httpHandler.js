(function() {

  const serverUrl = 'http://127.0.0.1:3000';
  // when the server sends out a response, we need it to end up in the client
  // maybe here
  $.ajax({
    type: 'GET',
    url: serverUrl,
    success: SwimTeam.move,
    error: console.log('error retrieving data from our server')
  })


})();
