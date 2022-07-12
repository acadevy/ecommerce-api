const express = require('express');
const { signup, signin } = require('../controllers/user_controller');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/validator');
const router = express.Router();


router.post('/signup',validateSignupRequest, isRequestValidated, signup);
router.post('/signin',validateSigninRequest, isRequestValidated, signin);


// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// });

module.exports = router;