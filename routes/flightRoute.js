const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.example);

router.get("/api/allflight", controller.allFlight);

router.post("/api/allflight", controller.addFlight);

module.exports = router;

