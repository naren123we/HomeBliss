const mongoose = require("mongoose");
const ResidencySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  facilities: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
  userEmail: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Residency = mongoose.model("Residency", ResidencySchema);

module.exports = Residency;
