const { createUser, getalluser, getuserbyid, updateuser, deleteuser, loginUser } = require('../Controller/UserController');
const express = require('express');
const router = express.Router();


router.post('/createuser', createUser);
router.get('/getalluser', getalluser);
router.get('/getuserbyid/:id', getuserbyid);
router.put('/updateuser/:id', updateuser);
router.delete('/deleteuser/:id', deleteuser);
router.post('/loginuser', loginUser);
module.exports = router;  