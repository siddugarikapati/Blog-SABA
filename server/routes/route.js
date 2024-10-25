const express = require('express');
const { signupUser } = require('../controller/user-controller');

const router = express.Router();

router.post('/', signupUser);

module.exports = router;
