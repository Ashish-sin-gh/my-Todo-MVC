const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home.js');

router.get('/', homeController.displayFrontPage);

module.exports = router;
