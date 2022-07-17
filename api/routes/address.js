const express = require('express');
const { requireSignin, userMiddleware } = require('../middleware/auth');
const { addAddress, getAddress } = require('../controllers/address');
const router = express.Router();


router.post('/address/create', requireSignin, userMiddleware, addAddress);
router.post('/getaddress', requireSignin, userMiddleware, getAddress);

module.exports = router;