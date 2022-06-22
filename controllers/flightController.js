const { v4: uuid } = require("uuid");

// dummy flight data
let flightData = [
  {
    id: uuid(),
    title: "flight to canada",
    time: "1pm",
    price: 26000,
    date: "26-06-2022",
  },
];

// Get bookings
// Responds with all available flights booking data
// Method - GET
exports.getAll = (req, res) => {
  res.json(flightData);
};

// create new flight route
// Allows user to create new flight booking
// Method - POST
exports.createNew = (req, res) => {
  const { title, price } = req.body;
  if (!title || !price) {
    return res.json({ message: "Please make sure to provide all fields" });
  }
  flightData.push({
    title,
    time: new Date().toLocaleTimeString(),
    price,
    date: new Date().toLocaleDateString(),
    id: uuid(),
  });

  res.json(flightData);
};

// Get single flight booking
// Allows user to see details of single flight
// Method - GET
exports.getSingle = (req, res) => {
  const { id } = req.params;
  const singleFlight = flightData.find((flight) => flight.id === id);
  if (!singleFlight) {
    return res.json({ message: "Flight not found" });
  }
  res.json(singleFlight);
};

// Update single flight booking data
// Allows user to change flight booking data
// Method - PUT
exports.patchSingle = (req, res) => {
  const { id } = req.params;
  const { title, price } = req.body;
  const bookingToBeUpdated = flightData.find((booking) => booking.id === id);
  if (bookingToBeUpdated) {
    bookingToBeUpdated.price = price;
    bookingToBeUpdated.title = title;

    res.json(bookingToBeUpdated);
  }
};

// Delete single flight booking
// Allows user to delete single flight booking
// Method - DELETE
exports.deleteSingle = (req, res) => {
  const { id } = req.params;
  const bookingLeft = flightData.filter((flight) => flight.id !== id);
  res.json(bookingLeft);
};
