import { useState } from "react";
import './App.css';

function App() {
  // State variables for inputs and results
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [statusColor, setStatusColor] = useState("");

  // Function to calculate BMI
  const calculateBMI = () => {
    // Input validation
    if (!height || !weight) {
      alert("Please enter both height and weight values!");
      return;
    }

    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    // Validate for negative or zero values
    if (heightNum <= 0 || weightNum <= 0) {
      alert("Height and weight must be positive values!");
      return;
    }

    // BMI calculation: BMI = Weight / (Height/100)²
    const heightInMeters = heightNum / 100;
    const calculatedBMI = weightNum / (heightInMeters * heightInMeters);
    const roundedBMI = Math.round(calculatedBMI * 10) / 10;

    setBmi(roundedBMI);

    // Determine BMI status and color
    let status = "";
    let color = "";

    if (roundedBMI < 18.5) {
      status = "Underweight";
      color = "text-info";
    } else if (roundedBMI >= 18.5 && roundedBMI <= 24.9) {
      status = "Normal weight";
      color = "text-success";
    } else if (roundedBMI >= 25 && roundedBMI <= 29.9) {
      status = "Overweight";
      color = "text-warning";
    } else {
      status = "Obese";
      color = "text-danger";
    }

    setBmiStatus(status);
    setStatusColor(color);
  };

  // Function to reset the calculator
  const resetCalculator = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
    setStatusColor("");
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg">
              <div className="card-header bg-primary text-white text-center">
                <h2 className="mb-0">
                  <i className="fas fa-calculator me-2"></i>
                  BMI Calculator
                </h2>
                <p className="mb-0 mt-2">Track Your Fitness Journey</p>
              </div>
              
              <div className="card-body p-4">
                {/* Height Input */}
                <div className="mb-3">
                  <label htmlFor="height" className="form-label fw-bold">
                    <i className="fas fa-ruler-vertical me-2"></i>
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    id="height"
                    className="form-control form-control-lg"
                    placeholder="Enter your height in centimeters"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    min="1"
                    step="0.1"
                  />
                </div>

                {/* Weight Input */}
                <div className="mb-4">
                  <label htmlFor="weight" className="form-label fw-bold">
                    <i className="fas fa-weight me-2"></i>
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    id="weight"
                    className="form-control form-control-lg"
                    placeholder="Enter your weight in kilograms"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    min="1"
                    step="0.1"
                  />
                </div>

                {/* Buttons */}
                <div className="d-grid gap-2 mb-4">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={calculateBMI}
                  >
                    <i className="fas fa-calculator me-2"></i>
                    Calculate BMI
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={resetCalculator}
                  >
                    <i className="fas fa-redo me-2"></i>
                    Reset
                  </button>
                </div>

                {/* Results Display */}
                {bmi !== null && (
                  <div className="result-section">
                    <div className="alert alert-light border text-center">
                      <h4 className="mb-3">Your BMI Results</h4>
                      
                      <div className="row">
                        <div className="col-6">
                          <div className="bg-light p-3 rounded">
                            <h5 className="text-primary mb-1">BMI Value</h5>
                            <h3 className="fw-bold text-dark">{bmi}</h3>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="bg-light p-3 rounded">
                            <h5 className="text-primary mb-1">Status</h5>
                            <h4 className={`fw-bold ${statusColor}`}>
                              {bmiStatus}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* BMI Classification Chart */}
                    <div className="mt-3">
                      <h6 className="text-center mb-3">BMI Classification</h6>
                      <div className="row text-center small">
                        <div className="col-3">
                          <div className="p-2 bg-info bg-opacity-10 rounded">
                            <strong className="text-info">Underweight</strong>
                            <br />
                            &lt; 18.5
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="p-2 bg-success bg-opacity-10 rounded">
                            <strong className="text-success">Normal</strong>
                            <br />
                            18.5 - 24.9
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="p-2 bg-warning bg-opacity-10 rounded">
                            <strong className="text-warning">Overweight</strong>
                            <br />
                            25.0 - 29.9
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="p-2 bg-danger bg-opacity-10 rounded">
                            <strong className="text-danger">Obese</strong>
                            <br />
                            ≥ 30.0
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer Information */}
            <div className="text-center mt-3">
              <small className="text-muted">
                <i className="fas fa-info-circle me-1"></i>
                BMI is a screening tool and not a diagnostic measure. 
                Consult healthcare professionals for medical advice.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
