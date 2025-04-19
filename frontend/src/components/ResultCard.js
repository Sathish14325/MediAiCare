import React from "react";

const ResultCard = ({ data }) => {
  const Section = ({ title, items }) => (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-indigo-600">{title}:</h3>
      <ul className="list-disc list-inside mt-2 text-gray-700">
        {items?.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="mt-8 p-6 border border-indigo-200 rounded-xl bg-indigo-50">
      <h2 className="text-2xl font-bold text-indigo-700 mb-2">
        🧾 Disease: {data.disease}
      </h2>
      <p className="text-gray-800 mb-4">{data.description}</p>

      <Section title="Precautions" items={data.precautions} />
      <Section title="Medications" items={data.medications} />
      <Section title="Diet" items={data.diet} />
      <Section title="Workout" items={data.workout} />
    </div>
  );
};

export default ResultCard;
