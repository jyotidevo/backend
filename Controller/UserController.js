const User = require("../Models/UserModel");
const Product = require("../Models/Product");

// Create User
const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const newuser = await User.create({
            username,
            email,
            password
        });

        res.status(201).json(newuser);
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get All Users
const getalluser = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// Create Product
//const createproduct = async (req, res) => {
  //  try {
    //    const { ProductName, ProductPrice, description, quantity } = req.body;
//
  //      const newproduct = await Product.create({
    //        ProductName,
      //      ProductPrice,
        //    description,
          //  quantity
        //});

       // res.status(201).json(newproduct);
    //} catch (err) {
      //  res.status(500).json({ error: "Internal server error" });
    //}
//};

module.exports = {
    createUser,
    
    getalluser
};