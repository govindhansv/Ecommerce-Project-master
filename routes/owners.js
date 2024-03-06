const express = require("express");
const router = express.Router();
const ownerController = require("../controllers/owners-controller");

router.get("/", ownerController.getHome);
// router.get('/add', ownerController.getProductAddform);
// router.post("/add", ownerController.addProduct);
// router.get('/edit/:id', ownerController.getProductEditform);
// router.post("/edit", ownerController.editProduct);
// router.get('/:id', ownerController.getProductById);
// router.get("/delete/:id", ownerController.deleteProduct);

module.exports = router;