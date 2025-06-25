const express = require('express');
const router = express.Router();
const { getCurrentWeather } = require('../controllers/weatherController');
const { getForecast } = require('../controllers/forecastController');
const { searchLocations } = require('../controllers/geocodeController');

router.get('/weather', getCurrentWeather);
router.get('/forecast', getForecast);
router.get('/geocode', searchLocations);

module.exports = router;
