const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const sampleRouter = require("./routes/sampleRoute");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/v1/samples", sampleRouter);
app.use("/api/v1/users", userRouter);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

module.exports = app;
