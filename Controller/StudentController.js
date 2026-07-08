const Student = require("../Models/StudentModel");

const createStudent = async (req, res) => {
    try {
        const newStudent = await Student.create(req.body);
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(500).json({ error: 'internal server error' });
    }
}
const getallstudent = async (req, res) => {
    try {
        const allstudents = await Student.findAll();
        res.status(200).json(allstudents);
    } catch (error) {
        res.status(500).json({ error: 'internal server error' });
    }
}
const getstudentbyid = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) {
            return res.status(404).json({ error: 'student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: 'internal server error' });
    }
}
const updatestudent = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) {
            return res.status(404).json({ error: 'student not found' });
        }
        else {
            await student.update(req.body);
            res.status(200).json(student);
        }
    } catch (error) {
        res.status(500).json({ error: 'internal server error' });
    }
}
const deletestudent = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) {
            return res.status(404).json({ error: 'student not found' });
        }
        else {
            await student.destroy();
            res.status(200).json({ message: 'student deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: 'internal server error' });
    }
}
const loginStudent = async (req, res) => {
    try {
        const { email, password } = req.body;
        const student = await Student.findOne({ where: { email } });
        if (!student) {
            res.status(404).json({ error: 'student not found' });
        }
        else {
            if (student.password !== password) {
                return res.status(401).json({ error: 'invalid password' });
            }
            else {
                res.status(200).json({ message: 'student logged in successfully' });
            }
        }
    } catch (err) {
        res.status(500).json({ error: 'internal server error' });
    }
};
module.exports = { createStudent, getallstudent, getstudentbyid, updatestudent, deletestudent, loginStudent };  
