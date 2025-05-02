const express = require("express");
const axios = require("axios");

const router = express.Router();

// POST /api/chatbot/ask
router.post("/ask", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  try {
    const flaskResponse = await axios.post("http://localhost:1000/ask", {
      question,
    });

    //console.log("AI Response:", flaskResponse.data);

    // ✅ Fix: Access .data.answer
    res.json({ answer: flaskResponse.data.answer });
  } catch (err) {
    console.error("Error forwarding to Flask API:", err.message);
    if (err.response) {
      console.error("Status:", err.response.status);
      console.error("Data:", err.response.data);
    }
    res.status(500).json({ error: "Failed to get response from AI backend" });
  }
});

module.exports = router;
