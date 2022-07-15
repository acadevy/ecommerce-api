const express = require("express");
const {
  addCategory,
  getCategories,
  updateCategories,
  deleteCategories,
} = require("../controllers/category");
const {
  requireSignin,
  adminMiddleware,
  superAdminMiddleware,
} = require("../middleware/auth");
const router = express.Router();
const shortid = require("shortid");
const path = require("path");
const multer = require("multer");
const upload = require('../middleware/config');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(path.dirname(__dirname), "uploads"));
//   },
//   filename: function (req, file, cb) {
//     cb(null, shortid.generate() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage });

router.post(
  "/create",
  requireSignin,
  superAdminMiddleware,
  upload.single("categoryImage"),
  addCategory
);
router.get("/getcategory", getCategories);
router.post(
  "/update",
  requireSignin,
  superAdminMiddleware,
  upload.array("categoryImage"),
  updateCategories
);
router.post(
  "/delete",
  requireSignin,
  superAdminMiddleware,
  deleteCategories
);

module.exports = router;
