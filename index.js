const express = require("express");
const { json, urlencoded } = require("express");
const routes = require("./routes/flightRoute");

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/api/flights", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
