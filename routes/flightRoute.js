const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.example)
router.get("/api/allFlight", controller.allFlight)

module.exports = router;

