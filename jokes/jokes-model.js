const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  // removeUser
};

function find() {
  return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('users').where(filter);
}

function add(user) {
  return db('users').insert(user)
  .then(ids => {
    return ids[0]
  })
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}