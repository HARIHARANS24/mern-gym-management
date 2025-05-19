import React, { useState } from "react";
import { toast } from "react-toastify";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");
  const [bmiMessage, setBmiMessage] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    const parsedHeight = parseFloat(height);
    const parsedWeight = parseFloat(weight);

    if (!parsedHeight || !parsedWeight || !gender) {
      toast.error("Please enter valid height, weight, and gender.");
      return;
    }

    const heightInMeters = parsedHeight / 100;
    const bmiValue = (parsedWeight / (heightInMeters ** 2)).toFixed(2);
    setBmi(bmiValue);

    let message = "";

    if (bmiValue < 18.5) {
      message = "You are underweight. Consider seeking advice from a healthcare provider.";
      toast.warning(message);
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      message = "You have a normal weight. Keep maintaining a healthy lifestyle.";
      toast.success(message);
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      message = "You are overweight. Consider seeking advice from a healthcare provider.";
      toast.warning(message);
    } else {
      message = "You are in the obese range. It is recommended to seek advice from a healthcare specialist.";
      toast.error(message);
    }

    setBmiMessage(message);
  };

  return (
    <section className="bmi">
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label>Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type="submit">Calculate BMI</button>

            {/* BMI Result */}
            {bmi && (
              <div className="bmi-result" style={{ marginTop: "1rem" }}>
                <p><strong>Your BMI:</strong> {bmi}</p>
                <p>{bmiMessage}</p>
              </div>
            )}
          </form>
        </div>
<img
  src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80"
  alt="BMI Calculation"
  style={{ maxWidth: "100%", borderRadius: "8px" }}
/>


      </div>
    </section>
  );
};

export default BMICalculator;
