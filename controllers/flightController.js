let flightData = {
  title: "flight to canada",
  time: "1pm",
  price: 26000,
  date: "26-06-2022",
};

// Get all data controller
// responds with whole flight data

exports.getAll = (req, res) => {
  res.json(flightData);
};

exports.createNew = (req, res) => {
  res.send("Create new flight book");
};

exports.getSingle = (req, res) => {
  res.send("get single flight data");
};

exports.patchSingle = (req, res) => {
  res.send("Patch single flight data");
};

exports.deleteSingle = (req, res) => {
  res.send("Delete single flight data");
};
