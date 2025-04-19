const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors"); // Add this line

const heartRoutes = require("./routes/heartRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/HMS1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Routes
app.use("/api/signup", require("./routes/signup"));
app.use("/api/login", require("./routes/login"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/doctor", require("./routes/doctor"));
app.use("/api/patient", require("./routes/patient"));
app.use("/api/healthPredict", require("./routes/healthPredict"));
app.use("/api/predict-diabetes", require("./routes/diabetes"));
app.use("/api/predict-kidney", require("./routes/kidneyPrediction"));
app.use("/api/predict-heart", heartRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Hospital Management System API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
