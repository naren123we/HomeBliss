const User = require("../models/User");
const Residency = require("../models/Residency");

exports.createResidency = async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    country,
    city,
    facilities,
    image,
    userEmail,
  } = req.body.data;

  try {
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(400).send("User not found");
    }

    // Check if residency already exists
    const existingResidency = await Residency.findOne({ address, userEmail });
    if (existingResidency) {
      return res.status(400).send("Residency already exists");
    }

    const residency = new Residency({
      title,
      description,
      price,
      address,
      country,
      city,
      facilities,
      image,
      userEmail,
      owner: user._id, // Connecting owner by _id
    });

    await residency.save();
    res.send({ message: "Residency created successfully", residency });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

exports.getAllResidencies = async (req, res) => {
  try {
    const residencies = await Residency.find({});
    res.send(residencies);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

// to get specific residency

exports.getResidency = async (req, res) => {
  const { id } = req.params;
  try {
    const residency = await Residency.findById(id);
    if (!residency) {
      return res.status(404).send("Residency not found");
    }
    res.send(residency);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};
