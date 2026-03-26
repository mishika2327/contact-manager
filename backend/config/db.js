const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error(
        "MONGO_URI not found in environment variables. Check .env file."
      );
    }
    await mongoose.connect(mongoUri);
    console.log("✓ MongoDB Connected successfully");
  } catch (err) {
    console.error("✗ MongoDB Connection Error:", err.message);
    return false;
  }
};

module.exports = connectDB;