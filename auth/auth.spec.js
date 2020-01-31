const request = require('supertest');

const User = require('../jokes/jokes-model.js');
const auth = require('../auth/auth-router.js');
const db = require('../database/dbConfig.js');

describe('auth', function() {
  describe('test environment', function() {
    it('should use the testing environment', function(){
      expect(process.env.DB_ENV).toBe('testing');
    })
  })
  describe('add', function() {
    beforeEach(async () => {
      await db('users').truncate();
    })
    it('adds new user', async function() {
      await User.add({ username: 'Abdi', password: '123'})

      const users = await User.find();
      expect(users).toHaveLength(1);
    })
  })
})