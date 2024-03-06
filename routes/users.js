const express = require("express");
const router = express.Router();
const userController = require("../controllers/users-controller");

router.get("/", userController.getHome);
// router.get('/add', userController.getProductAddform);
// router.post("/add", userController.addProduct);
// router.get('/edit/:id', userController.getProductEditform);
// router.post("/edit", userController.editProduct);
// router.get('/:id', userController.getProductById);
// router.get("/delete/:id", userController.deleteProduct);

module.exports = router;