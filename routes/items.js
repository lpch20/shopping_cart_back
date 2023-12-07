const express = require('express');
const items = require('../controllers/intemsController');

const router = express.Router()

router.get('/itemsGet', items)

module.exports = router;