const Product = require('../Models/Product');


const createProduct = async (req, res) => {
    try {

        const newproduct = await Product.create(req.body);
        res.status(201).json(newproduct);
    } catch (error) {
        res.status(500).json({ error: 'internal server error' });
    }
};

const getallproduct = async (req, res) => {
    try {
        const allproducts = await Product.findAll();
        res.status(200).json(allproducts);
    } catch (error) {
        res.status(500).json({ error: 'internal server error' });
    }
};
const getproductbyid = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'internal server error' });
    }
};

const updateproduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {

            await product.update(req.body);
            res.status(200).json(product);
        }
        else {
            res.status(404).json({ error: 'product not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'internal server error' });
    }
};
const delectproduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            await product.destroy();
            res.status(200).json({ message: 'product deleted successfully' });
        }
        else {
            res.status(404).json({ error: 'product not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'internal server error' });
    }
};

module.exports = { createProduct, getallproduct, getproductbyid, updateproduct, delectproduct };