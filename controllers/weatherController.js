const fetch = require('node-fetch');

const API_KEY = process.env.OPENWEATHER_API_KEY;

const getCurrentWeather = async (req, res) => {
  const { lat, lon, units } = req.query;
  
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Weather API response was not ok');
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Weather API Error:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};

module.exports = {
  getCurrentWeather
};
