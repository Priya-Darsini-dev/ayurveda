const express = require("express");
const router = express.Router();

const {
    addRemedy,
    getAllRemedies,
    getRemedyById,
    getRemedyByTitle,
    searchRemedy
} = require("../controllers/remedyController");

// Get all remedies
router.get("/", getAllRemedies);

router.get("/search", searchRemedy);

// Get remedy by title
router.get("/title/:title", getRemedyByTitle);

// Get remedy by ID
router.get("/:id", getRemedyById);

// Add new remedy
router.post("/", addRemedy);

module.exports = router;