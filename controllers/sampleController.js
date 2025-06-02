const Sample = require("../models/sampleModel");

exports.getSample = async (req, res) => {
  try {
    const sample = await Sample.find();
    res.status(200).json({
      status: "Success",
      data: { sample },
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message,
    });
  }
};

exports.createSample = async (req, res) => {
  try {
    const newSample = await Sample.create(req.body);
    res.status(201).json({
      status: "success",
      data: { newSample },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
