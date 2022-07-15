const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController')

router.get('/', studentController.get);

module.exports = router;