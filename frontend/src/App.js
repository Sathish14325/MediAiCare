import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Patient from "./components/Patient";
import Doctor from "./components/Doctors";
import Admin from "./components/Admins";
import HealthPredict from "./pages/HealthPredict";
import DiabetesPredictionPage from "./pages/DiabetesPredictionPage";
import KidneyPrediction from "./pages/KidneyPrediction";
import HeartPrediction from "./pages/HeartPrediction";
import ChatbotPage from "./pages/ChatbotPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/healthPredict" element={<HealthPredict />} />
          <Route path="/diabetes" element={<DiabetesPredictionPage />} />
          <Route path="/heart" element={<HeartPrediction />} />
          <Route
            path="/kidney-disease-predict"
            element={<KidneyPrediction />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />

          {/* route for chatbot */}
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
