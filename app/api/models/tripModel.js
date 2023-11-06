import mongoose from "mongoose";

const tripSchema = mongoose.Schema(
    {
        place: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        mapLink: {
            type: String,
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
    }
)