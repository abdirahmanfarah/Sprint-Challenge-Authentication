const request = require("supertest");
const server = require("../api/server.js");

describe('server', function() {
  test('runs the tests', function() {
    expect(true).toBe(true);
  })

  describe('Get /', function() {
    it('should return 200', function() {
      return request(server).get('/').then(res =>{
        expect(res.status).toBe(200);
      })
    })

    it('should return JSON', function() {
      return request(server).get('/').then(res => {
        expect(res.type).toMatch(/json/i);
      })
    })
  })
})