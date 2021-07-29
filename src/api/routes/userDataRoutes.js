const express = require('express');
const router = express.Router();

// controllers
const userController = require('./../controllers/userDataController');

// Routes
router.route('/:offset/:count').get(userController.getUserData);
router.route('/userDetails').get(userController.getUserDetails);

module.exports = router;