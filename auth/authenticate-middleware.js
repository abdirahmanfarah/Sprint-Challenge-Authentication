/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secrets.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if(token){
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if(err) {
        //not valid token
        res.status(401).json({ You: "can't touch this!" })
      }else {
        // req.house = decodedToken.house;
        next();
      }
    })
  }else {
  res.status(401).json({ you: 'shall not pass!' });
  }
};
