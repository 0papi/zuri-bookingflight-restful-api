let id = 1;
let flightData = [
  {
    id: id,
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
  // console.log("Request Object", req);
  console.log("Response Object", res);
  res.json(flightData);
};

// create new flight route
// Allows user to create new flight booking
// Method - POST
exports.createNew = (req, res) => {
  const { title, time, price, date } = req.body;
  if (!title || !time || !price || !date) {
    return res.json({ message: "Please make sure to provide all fields" });
  }
  const updatedFlights = flightData.push({
    title,
    time,
    price,
    date,
    id: id++,
  });

  res.json(updatedFlights);
};

// Get single flight booking
// Allows user to see details of single flight
// Method - GET
exports.getSingle = (req, res) => {
  const { id } = req.params;
  const singleFlight = flightData.find((flight) => flight.id === id);
  res.json(singleFlight);
};

// Update single flight booking data
// Allows user to change flight booking data
// Method - PUT
exports.patchSingle = (req, res) => {
  const { id } = req.params;
  const { title, price, time, date } = req.body;
  const bookingToBeUpdated = flightData.find((booking) => booking.id === id);
  if (bookingToBeUpdated) {
    bookingToBeUpdated.date = date;
    bookingToBeUpdated.price = price;
    bookingToBeUpdated.time = time;
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
