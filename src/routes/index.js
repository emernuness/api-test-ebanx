const express = require('express');
const balanceController = require('../controllers/balanceController');
const eventController = require('../controllers/eventController');

const router = express.Router();

router.get('/balance', balanceController.getBalance);
router.post('/event', eventController.postEvent);

module.exports = router;