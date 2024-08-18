var express = require('express');
var router = express.Router();
var controller = require('../controllers/users.controller');

router.post('/register', controller.registerUser);
router.post('/login', controller.loginUser);

module.exports = router;
