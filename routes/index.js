const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index-controller");

router.get("/", indexController.getHome);
// router.get('/add', indexController.getProductAddform);
// router.post("/add", indexController.addProduct);
// router.get('/edit/:id', indexController.getProductEditform);
// router.post("/edit", indexController.editProduct);
// router.get('/:id', indexController.getProductById);
// router.get("/delete/:id", indexController.deleteProduct);

module.exports = router;