const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-controller");

router.get("/", adminController.getHome);
// router.get('/add', adminController.getProductAddform);
// router.post("/add", adminController.addProduct);
// router.get('/edit/:id', adminController.getProductEditform);
// router.post("/edit", adminController.editProduct);
// router.get('/:id', adminController.getProductById);
// router.get("/delete/:id", adminController.deleteProduct);

module.exports = router;