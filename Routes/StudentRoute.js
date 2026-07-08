const { createStudent, getallstudent, getstudentbyid, updatestudent, deletestudent, loginStudent } = require('../Controller/StudentController');
const express = require('express');
const router = express.Router();

router.post('/createstudent', createStudent);
router.get('/getallstudent', getallstudent);
router.get('/getstudentbyid/:id', getstudentbyid);
router.put('/updatestudent/:id', updatestudent);
router.delete('/deletestudent/:id', deletestudent);
router.post('/loginstudent', loginStudent);
module.exports = router;