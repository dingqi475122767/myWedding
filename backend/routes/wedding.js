var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/dingqi', function(req, res, next) {
  res.send('丁琦是傻逼');
});

module.exports = router;