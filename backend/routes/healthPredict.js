// backend/routes/healthPredict.js
const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/predict", async (req, res) => {
  try {
    const { symptoms } = req.body;
    const response = await axios.post("http://localhost:1000/api/predict", {
      symptoms,
    });
    res.json(response.data);
  } catch (error) {
    console.error("Prediction error:", error.message);
    res.status(500).json({ error: "Prediction failed" });
  }
});

module.exports = router;
