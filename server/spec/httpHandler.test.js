
const fs = require('fs');
const expect = require('chai').expect;
const server = require('./mockServer');

const httpHandler = require('../js/httpHandler');



describe('server responses', () => {

  it('should respond to a OPTIONS request', (done) => {
    let {req, res} = server.mock('/', 'OPTIONS');

    httpHandler.router(req, res);
    expect(res._responseCode).to.equal(200); // we expect to receive 200 from getting response code
    expect(res._ended).to.equal(true);       // we 
    expect(res._data.toString()).to.be.empty; // the response data should be empty (we should get no data from the server)
    
    done();
  });
  
  it('should respond to a GET request for a swim command', (done) => {
    let {req, res} = server.mock('/', 'GET');
    
    httpHandler.router(req, res);
    expect(res._responseCode).to.equal(200); // we expect to receive 200 from getting response code
    expect(res._ended).to.equal(true);       // we 
    expect(res._data.toString()).to.be.empty; // the response data should be empty (we should get no data from the server)
    // expect(res._data.toString()).to.equal('left' || 'right' || 'up' || 'down'); // the response data should be empty (we should get no data from the server)
  
    // write your test here
    // make sure the server can issue a **random command** using a **get request**
    // what things must we check to know a server has ...
      //1. issued a random command
      //2. sent out a get request
      //note: this means we'll be sending out an ajax GET request somewhere from server to client
      //   this request will specify a random command
    // should we 
    // should we get data from the server?

    done();
  });

  xit('should respond with 404 to a GET request for a missing background image', (done) => {
    httpHandler.backgroundImageFile = './spec/missing.jpg';
    let {req, res} = server.mock('FILL_ME_IN', 'FILL_ME_IN');

    httpHandler.router(req, res, () => {    
      expect(res._responseCode).to.equal(404);
      expect(res._ended).to.equal(true);
      done();
    });
  });

  xit('should respond with 200 to a GET request for a present background image', (done) => {
    // write your test here
    done();
  });

  xit('should respond to a POST request to save a background image', (done) => {
    // write your test here
    done();
  });

  xit('should send back the previously saved image', (done) => {
    // write your test here
    done();
  });
});
