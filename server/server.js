import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import cors from 'cors';
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

// Middlewares
app.use(cors());
app.use(express.json());

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

app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);

//! Error middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
