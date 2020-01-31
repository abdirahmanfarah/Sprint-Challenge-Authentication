const request = require('supertest');
const jokes = require('../jokes/jokes-router.js');
const server = require('../api/server.js');


describe('jokes', function() {
  
  describe('Get /',  function() { 

    it('should return 401',  function() {
      return request(server).get('/api/jokes')
      .then(res => {
        // console.log(res);
        expect(res.status).toBe(401);
      })
    })

    it('should return JSON', function() {
      return request(server).get('/api/jokes').then(res => {
        expect(res.type).toMatch(/json/i);
      })
    })
  })
})