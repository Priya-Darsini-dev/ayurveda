const Remedy = require("../models/Remedy");

// Add a new remedy
const addRemedy = async (req, res) => {
    try {

        const remedy = await Remedy.create(req.body);

        res.status(201).json({
            message: "Remedy added successfully",
            remedy
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Server Error"
        });

    }
};

const getAllRemedies = async (req, res) => {
    try {

        const remedies = await Remedy.find();

        res.status(200).json(remedies);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const getRemedyById = async (req, res) => {
    try {

        const remedy = await Remedy.findById(req.params.id);

        if (!remedy) {
            return res.status(404).json({
                message: "Remedy not found"
            });
        }

        res.status(200).json(remedy);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const getRemedyByTitle = async (req, res) => {
    try {

        const remedy = await Remedy.findOne({
            title: req.params.title
        });

        if (!remedy) {
            return res.status(404).json({
                message: "Remedy not found"
            });
        }

        res.status(200).json(remedy);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const searchRemedy = async (req, res) => {

    try {

        const query = req.query.query.toLowerCase();

        const remedies = await Remedy.find();

        const remedy = remedies.find(r => {

    // Match the remedy title
    if (query.includes(r.title.toLowerCase())) {
        return true;
    }

    // Match any keyword
    return r.keywords.some(keyword =>
        query.includes(keyword.toLowerCase())
    );

});

        if (!remedy) {

            return res.status(404).json({
                message: "No remedy found"
            });

        }

        res.json(remedy);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {
    addRemedy,
    getAllRemedies,
    getRemedyById,
    getRemedyByTitle,
    searchRemedy
};