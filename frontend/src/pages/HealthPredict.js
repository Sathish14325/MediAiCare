import React, { useState } from "react";
import axios from "axios";
import ResultCard from "../components/ResultCard";
import Navbar from "../components/Navbar";

function HealthPredict() {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handlePredict = async () => {
    setError("");
    setResult(null);

    const symptomsArray = symptoms
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    if (symptomsArray.length === 0) {
      setError("Please enter at least one symptom.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:1000/api/predict", {
        symptoms: symptomsArray,
      });
      setResult(response.data);
      console.log(response.data);
    } catch (err) {
      setError(err.response?.data?.error || "Prediction failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-10 px-4">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8">
          <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
            🩺 Symptom Checker
          </h1>

          <input
            type="text"
            placeholder="Enter symptoms (e.g., headache, nausea)"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button
            onClick={handlePredict}
            className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Predict Disease
          </button>

          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
          {result && <ResultCard data={result} />}
        </div>
      </div>
    </>
  );
}

export default HealthPredict;
