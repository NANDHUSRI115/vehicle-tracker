const map = L.map("map").setView([51.505, -0.09], 13);

// Load the tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

// Create a custom icon
const vehicleIcon = L.icon({
  iconUrl: "vehicle.png",
  iconSize: [38, 95], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

// Initialize the vehicle marker
const vehicleMarker = L.marker([51.505, -0.09], { icon: vehicleIcon }).addTo(
  map
);

// Function to update vehicle location
async function updateVehicleLocation() {
  const response = await fetch("http://localhost:3000/api/vehicle-location");
  const data = await response.json();
  const { latitude, longitude, route } = data;

  // Update marker position
  vehicleMarker.setLatLng([latitude, longitude]);

  // Draw the route
  const routeLatLngs = route.map((coord) => [coord.latitude, coord.longitude]);
  L.polyline(routeLatLngs, { color: "blue" }).addTo(map);
}

// Update vehicle location every 5 seconds
setInterval(updateVehicleLocation, 5000);
