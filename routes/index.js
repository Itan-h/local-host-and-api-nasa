var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ message: 'Hello, welcome' });
});

module.exports = router;
