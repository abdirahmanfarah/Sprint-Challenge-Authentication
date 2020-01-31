const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/secrets.js');

const Users = require('../jokes/jokes-model.js');


router.post('/register', (req, res) => {
  // implement registration

  let user = req.body;
  const hash = bcryptjs.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(err => {
      res.status(500).json(err);
    })

});

router.post('/login', (req, res) => {
  // implement login

  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if(user && bcryptjs.compareSync(password, user.password)) {
        const token = signToken(user);

        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

function signToken(user) {
  const payload = {
    user
  };

  const options = {
    expiresIn: '1d'
  }
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
