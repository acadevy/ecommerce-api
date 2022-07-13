const express = require('express');
const { signup, signin, signout } = require('../../controllers/admin/admin_controller');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../../validators/validator');
const { requireSignin } = require('../../middleware/auth');
const router = express.Router();


router.post('/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/signin', validateSigninRequest, isRequestValidated, signin);
router.post('/signout', signout)


module.exports = router;