require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const remedyRoutes = require("./routes/remedyRoutes");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

connectDB();

// Middleware
app.use(express.json());

app.use("/api/users", userRoutes);

app.use("/api/remedies", remedyRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Ayurveda Backend is Running!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});