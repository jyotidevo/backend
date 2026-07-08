const { createProduct, getallproduct, getproductbyid, updateproduct, delectproduct, loginProduct } = require('../Controller/ProductController');
const express = require('express');
const router = express.Router();

router.post('/createproduct', createProduct);
router.get('/getallproduct', getallproduct);
router.get('/getproductbyid/:id', getproductbyid);
router.put('/updateproduct/:id', updateproduct);
router.delete('/deleteproduct/:id', delectproduct);
router.post('/loginproduct', loginProduct);
module.exports = router;    