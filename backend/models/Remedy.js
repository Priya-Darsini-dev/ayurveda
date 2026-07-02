const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
});

const remedySchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true,
        enum: ["Health", "Skin", "Hair"]
    },

    keywords: [
    {
        type: String
    }
],

    ingredients: [ingredientSchema],

    methods: [
    {
        title: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        }
    }
],

    note: {
        type: String,
        default: ""
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Remedy", remedySchema);