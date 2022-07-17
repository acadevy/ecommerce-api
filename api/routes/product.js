const express = require("express");
//const {  } = require('../controller/category');
const {
  requireSignin,
  adminMiddleware
} = require("../middleware/auth");
const {
  createProduct,
  getProductsBySlug,
  getProductDetailsById,
  deleteProductById,
  getProducts,
} = require("../controllers/product");
const multer = require("multer");
const router = express.Router();
const shortid = require("shortid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + shortid() + path.extname(file.originalname));
  }
})

const upload = multer({ storage });

router.post(
  "/create",
  requireSignin,
  adminMiddleware,
  upload.array("productPicture"),
  createProduct
);
router.get("/:slug", getProductsBySlug);
//router.get('/category/getcategory', getCategories);

router.get("/getproducts/:productId", getProductDetailsById);

router.delete(
  "/deleteProductById",
  requireSignin,
  adminMiddleware,
  deleteProductById
);
router.post(
  "/getProducts",
  requireSignin,
  adminMiddleware,
  getProducts
);

module.exports = router;
