const fun = require('../functions');
var db = require('../connection')



const getHome = async function(req, res) {
    // res.render('forms/signup')
    res.send('hello');
}


const getProductAddform = async function(req, res) {
    // Logic to render or send the form for adding a product
    res.render('addProductForm'); // Example: render a form template named addProductForm
}

const addProduct = async function(req, res) {
    try {
        const productData = req.body; // Assuming product data is sent in the request body
        await db.collection('products').insertOne(productData); // Assuming your collection name is 'products'
        res.redirect('/products'); // Redirect to a page where all products are displayed
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding product');
    }
}

const getProductEditform = async function(req, res) {
    try {
        const productId = req.params.id; // Assuming ID is passed as a route parameter
        const product = await db.collection('products').findOne({ _id: productId }); // Assuming your collection name is 'products'
        res.render('editProductForm', { product }); // Example: render a form template named editProductForm with product data
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching product for editing');
    }
}

const editProduct = async function(req, res) {
    try {
        const productId = req.body.productId; // Assuming productId is sent in the request body
        const updatedData = req.body; // Assuming updated product data is sent in the request body
        await db.collection('products').updateOne({ _id: productId }, { $set: updatedData }); // Assuming your collection name is 'products'
        res.redirect('/products'); // Redirect to a page where all products are displayed
    } catch (error) {
        console.error(error);
        res.status(500).send('Error editing product');
    }
}

const getProductById = async function(req, res) {
    try {
        const productId = req.params.id; // Assuming ID is passed as a route parameter
        const product = await db.collection('products').findOne({ _id: productId }); // Assuming your collection name is 'products'
        res.render('productDetails', { product }); // Example: render a template named productDetails with product data
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching product details');
    }
}

const deleteProduct = async function(req, res) {
    try {
        const productId = req.params.id; // Assuming ID is passed as a route parameter
        await db.collection('products').deleteOne({ _id: productId }); // Assuming your collection name is 'products'
        res.redirect('/products'); // Redirect to a page where all products are displayed
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting product');
    }
}

module.exports = {
    getProductAddform,
    addProduct,
    getProductEditform,
    editProduct,
    getProductById,
    deleteProduct,
    getHome
};


// exports.getHome = getHome;
