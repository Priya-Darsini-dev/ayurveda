const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
} = require("../controllers/userController");

const protect = require("../middleware/authMiddleware");
// Register User
router.post("/register", registerUser);

// Login User
router.post("/login", loginUser);

// Get Logged-in User Profile
router.get("/profile", protect, getUserProfile);

// Update Logged-in User Profile
router.put("/profile", protect, updateUserProfile);

// Delete Logged-in User Profile
router.delete("/profile", protect, deleteUserProfile);

module.exports = router;