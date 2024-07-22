const express = require("express");
const app = express();
const port = 3000;

// Simulate vehicle data
let vehicleData = {
  latitude: 51.505,
  longitude: -0.09,
  route: [
    { latitude: 51.505, longitude: -0.09 },
    { latitude: 51.51, longitude: -0.1 },
    { latitude: 51.515, longitude: -0.11 },
  ],
};

// API endpoint to get vehicle location
app.get("/api/vehicle-location", (req, res) => {
  // Simulate vehicle movement
  vehicleData.latitude += 0.0001;
  vehicleData.longitude += 0.0001;

  res.json(vehicleData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
