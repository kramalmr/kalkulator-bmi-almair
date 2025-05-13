import { useState } from "react";
import { Link } from "react-router-dom";


export default function Calculator() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  function calculateBMI() {
    if (height <= 0 || weight <= 0) {
      return "Invalid";
    }
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    return bmiValue.toFixed(2);
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md">
        <div>
          <label
            htmlFor="height"
            className="block text-gray-700 font-bold mb-2"
          >
            Height :
          </label>
          <div className="mb-4 flex flex-row items-center">
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border border-gray-300 rounded p-2"
            />
            <div className="ml-2" htmlFor="height">
              cm
            </div>
          </div>
          <label
            htmlFor="weight"
            className="block text-gray-700 font-bold mb-2"
          >
            Weight :
          </label>
          <div className="mb-4 flex flex-row items-center">
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border border-gray-300 rounded p-2"
            />
            <div className="ml-2" htmlFor="weight">
              kg
            </div>
          </div>
          <button
            onClick={() => setBmi(calculateBMI())}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Calculate
          </button>
          <Link
            to="/detail"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
          >
            Open Details
          </Link>
          <div className="mt-10">
            BMI: <span className="font-bold">{bmi}</span>
          </div>
          <div className="">
            RESULT :{" "}
            <span
              className="font-bold"
              style={{
                color:
                  bmi <= 0
                    ? ""
                    : bmi < 16
                    ? "red"
                    : bmi < 17
                    ? "orange"
                    : bmi < 18.5
                    ? "yellow"
                    : bmi < 25
                    ? "green"
                    : bmi < 30
                    ? "orange"
                    : bmi < 35
                    ? "red"
                    : bmi < 40
                    ? "darkred"
                    : "black",
              }}
            >
              {bmi == "Invalid" || bmi <= 0
                ? ""
                : bmi < 16
                ? "Severely Underweight"
                : bmi < 17
                ? "Moderately Underweight"
                : bmi < 18.5
                ? "Mildly Underweight"
                : bmi < 25
                ? "Normal"
                : bmi < 30
                ? "Overweight"
                : bmi < 35
                ? "Obese Class I"
                : bmi < 40
                ? "Obese Class II"
                : "Obese Class III"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
