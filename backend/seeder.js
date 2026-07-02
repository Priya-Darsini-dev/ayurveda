const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Remedy = require("./models/Remedy");
const remedies = require("./data/remedies");

dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

const importData = async () => {
    try {

        // Remove old remedies
        await Remedy.deleteMany();

        // Insert new remedies
        await Remedy.insertMany(remedies);

        console.log("✅ Remedies Imported Successfully");

        process.exit();

    } catch (error) {

        console.error(error);

        process.exit(1);

    }
};

importData();