const express = require("express");
const {
  addItemToCart,
  addToCart,
  getCartItems,
  removeCartItems,
} = require("../controllers/cart");
const { requireSignin, userMiddleware } = require("../middleware/auth");
const router = express.Router();

router.post(
  "/addtocart",
  requireSignin,
  userMiddleware,
  addItemToCart
);
//router.post('/user/cart/addToCartByLogin', requireSignin, userMiddleware, addToCart);
router.get("/getCartItems", requireSignin, userMiddleware, getCartItems);
//new update
router.delete(
  "/removeItem",
  requireSignin,
  userMiddleware,
  removeCartItems
);

module.exports = router;
