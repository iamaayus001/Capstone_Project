const express = require("express");
const morgan = require("morgan");
const sampleRoute = require("./routes/sampleRoute");

const app = express();

app.use(express.json());

app.use("/api/v1/samples", sampleRoute);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

module.exports = app;
