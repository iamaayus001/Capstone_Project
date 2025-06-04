const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./.env" });

const DB = process.env.DATABASE_URL.replace(
  "<db_password>",
  process.env.DATABASE_PASSWORD
);

const PORT = process.env.PORT || 8000;

mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connected succesfully....");
    app.listen(PORT, () => {
      console.log(`Server connected successfully on port ${PORT}....`);
    });
  })
  .catch((err) => {
    console.error("DB connection unsucessful", err.message);
  });
