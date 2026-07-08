const User = require('../Models/UserModel');




//create user
const createUser = async (req, res) => {
    try {
        // const {username,email,password} = req.body;
        const newuser = await User.create({ username, email, password });
        res.status(201).json(newuser);
    } catch (err) {
        res.status(500).json({ error: 'internal server error' });
    }
}



//get all users
const getalluser = async (req, res) => {
    try {
        const allusers = await User.findAll();
        res.status(200).json(allusers);
    } catch (err) {
        res.status(500).json({ error: 'internal server error' });
    }
};

//get user by id
const getuserbyid = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'user not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: 'internal server error' });
    }
};

//update user
const updateuser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            res.status(404).json({ error: 'user not found' });
        }
        else {
            await user.update(req.body);
            res.status(200).json(user);
        }
    } catch (err) {
        res.status(500).json({ error: 'internal server error' });
    }
};

//delete user
const deleteuser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            res.status(404).json({ error: 'user not found' });
        }
        else {
            await user.destroy();
            res.status(200).json({ message: 'user deleted successfully' });
        }
    } catch (err) {
        res.status(500).json({ error: 'internal server error' });
    }
};
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            res.status(404).json({ error: 'user not found' });
        }
        else {
            if (user.password !== password) {
                return res.status(401).json({ error: 'invalid password' });
            }
            else {
                res.status(200).json({ message: 'user logged in successfully' });
            }
        }
    } catch (err) {
        res.status(500).json({ error: 'internal server error' });
    }
}



module.exports = { createUser, getalluser, getuserbyid, updateuser, deleteuser, loginUser };