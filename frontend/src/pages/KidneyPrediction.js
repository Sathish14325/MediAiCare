// src/pages/KidneyPrediction.js
import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const KidneyPrediction = () => {
  const [formData, setFormData] = useState({
    age: "",
    bp: "",
    sg: "",
    al: "",
    su: "",
    rbc: "normal",
    pc: "normal",
    pcc: "notpresent",
    ba: "notpresent",
    bgr: "",
    bu: "",
    sc: "",
    sod: "",
    pot: "",
    hemo: "",
    pcv: "",
    wc: "",
    rc: "",
    htn: "no",
    dm: "no",
    cad: "no",
    appet: "good",
    pe: "no",
    ane: "no",
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:1000/api/predict-kidney",
        formData
      );
      setPrediction(response.data.prediction);
      setLoading(false);
    } catch (error) {
      setError("Error during prediction");
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center my-5 bg-gray-50">
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-lg">
          <h1 className="text-2xl font-semibold text-center mb-6">
            Kidney Disease Prediction
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="number"
              name="bp"
              value={formData.bp}
              onChange={handleChange}
              placeholder="Blood Pressure"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="number"
              name="sg"
              value={formData.sg}
              onChange={handleChange}
              placeholder="Specific Gravity"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="number"
              name="al"
              value={formData.al}
              onChange={handleChange}
              placeholder="Albumin"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              name="su"
              value={formData.su}
              onChange={handleChange}
              placeholder="Sugar"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="rbc"
              value={formData.rbc}
              onChange={handleChange}
              placeholder="Red Blood Cells"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="pc"
              value={formData.pc}
              onChange={handleChange}
              placeholder="Pus Cell"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="pcc"
              value={formData.pcc}
              onChange={handleChange}
              placeholder="Pus Cell clumps"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="ba"
              value={formData.ba}
              onChange={handleChange}
              placeholder="Bacteria"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              name="bgr"
              value={formData.bgr}
              onChange={handleChange}
              placeholder="Blood Glucose Random"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="number"
              name="bu"
              value={formData.bu}
              onChange={handleChange}
              placeholder="Blood Urea"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              name="sc"
              value={formData.sc}
              onChange={handleChange}
              placeholder="Serum Creatinine"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              name="sod"
              value={formData.sod}
              onChange={handleChange}
              placeholder="Sodium"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              name="pot"
              value={formData.pot}
              onChange={handleChange}
              placeholder="Potassium"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              name="hemo"
              value={formData.hemo}
              onChange={handleChange}
              placeholder="Hemoglobin"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              name="pcv"
              value={formData.pcv}
              onChange={handleChange}
              placeholder="Packed Cell Volume"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              name="wc"
              value={formData.wc}
              onChange={handleChange}
              placeholder="White Blood Cell Count"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              name="rc"
              value={formData.rc}
              onChange={handleChange}
              placeholder="Red Blood Cell Count"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <select
              name="htn"
              value={formData.htn}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="no">No Hypertension</option>
              <option value="yes">Yes Hypertension</option>
            </select>
            <select
              name="dm"
              value={formData.dm}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="no">No Diabetes Mellitus</option>
              <option value="yes">Yes Diabetes Mellitus</option>
            </select>
            <select
              name="cad"
              value={formData.cad}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="no">No Coronary Artery Disease</option>
              <option value="yes">Yes Coronary Artery Disease</option>
            </select>
            <select
              name="appet"
              value={formData.appet}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="good">Good Appetite</option>
              <option value="poor">Poor Appetite</option>
            </select>
            <select
              name="pe"
              value={formData.pe}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="no">No Pedal Edema</option>
              <option value="yes">Yes Pedal Edema</option>
            </select>
            <select
              name="ane"
              value={formData.ane}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="no">No Anemia</option>
              <option value="yes">Yes Anemia</option>
            </select>

            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-md"
              disabled={loading}
            >
              {loading ? "Predicting..." : "Predict Kidney Disease"}
            </button>
          </form>

          {/* Show the prediction result */}
          {prediction && (
            <div className="mt-6 text-center">
              <p>Your kidney disease prediction: </p>
              <h2
                className={`font-semibold text-4xl ${
                  prediction === "ckd" ? "text-red-500" : "text-green-500"
                }`}
              >
                {prediction === "ckd"
                  ? "Chronic Kidney Disease (CKD)"
                  : "No CKD"}
              </h2>
            </div>
          )}

          {/* Show error message if there's an issue */}
          {error && (
            <div className="mt-6 text-center text-red-500">
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default KidneyPrediction;
