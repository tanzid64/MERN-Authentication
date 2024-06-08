import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const app = express();

// Database connection
const PORT = process.env.PORT || 3000;
try {
  await mongoose.connect(process.env.DB_URL);
  app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
