const express = require('express');
const { requireSignin, adminMiddleware } = require('../../middleware/auth');
const { initialData } = require('../../controllers/admin/initialData');
const router = express.Router();


router.post('/initialdata', requireSignin, adminMiddleware, initialData);


module.exports = router;