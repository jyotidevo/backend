const { getalluser, createUser } = require('../Controller/UserController');
const express = require('express');
const router = express.Router();


router.post('/createuser', createUser);
router.get('/getalluser', getalluser);
module.exports = router;   ter;   