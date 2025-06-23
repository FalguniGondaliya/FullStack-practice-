const express= require('express');
const { signup, login } = require('../controllers/user.controller');
const router = express.Router();


//register route
router.post('/register',signup);


//login route
router.post('/login', login);


module.exports = router;

