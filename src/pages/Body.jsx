import "./Body.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

function Body() {
  const [weight, setWeight] = useState(() =>{
     const savedWeight = JSON.parse(localStorage.getItem("weight"));
     return savedWeight ? savedWeight : "0";
  }
  );
  const [height, setHeight] = useState(() => {
     const savedHeight = JSON.parse(localStorage.getItem("height"));
     return savedHeight ? savedHeight : "0";
  });
  const [bmi, setBmi] = useState(() => {
    const savedBMI = JSON.parse(localStorage.getItem("bmi"));
    return savedBMI ? savedBMI : "0";
  });

  const calculateBMI = () => {
    if (!weight || !height) {
      return;
    }

    const heightInMeters = height / 100;
    const calculatedBMI = weight / (heightInMeters * heightInMeters);

    setBmi(calculatedBMI.toFixed(2));
  };

  

  useEffect(() => {
    localStorage.setItem("weight",JSON.stringify(weight)

    )
  },[weight])

  

  useEffect(() => {
    localStorage.setItem("height", JSON.stringify(height));
  }, [height]);

  

  useEffect(() => {
    localStorage.setItem("bmi", JSON.stringify(bmi));
  }, [bmi]);
  

  return (
    <>
      <header className="header">
        <h1>Hello, Vinay!</h1>
        <p>Stay Consistent and crush your goals.</p>
      </header>

      <nav className="navbar">
        <Link to="/" className="nav-dashboard">
          Dashboard
        </Link>

        <Link to="/body" className="nav-body">
          Body
        </Link>

        <Link to="/protein" className="nav-protein">
          Protein
        </Link>

        <Link to="/goal" className="nav-goal">
          Goal
        </Link>
      </nav>

      <div className="body-calculations">
        <div className="bmi-features">
          <div className="bmi">
            <h2>Calculate your BMI</h2>

            <div className="input">
              <input
                type="number"
                placeholder="Enter your weight (in Kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />

              <input
                type="number"
                placeholder="Enter your height (in Cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            <div className="bmi-button">
              <button className="calculate-btn" onClick={calculateBMI}>
                Calculate BMI
              </button>
            </div>

            <h3>Your BMI is: {bmi !== null ? bmi : "--"}</h3>
          </div>
        </div>

        <div>
          <div className="bmi-table">
           

            <table>
              <thead>
                <tr>
                  <th>BMI Range</th>
                  <th>Category</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Below 18.5</td>
                  <td>Underweight</td>
                </tr>

                <tr>
                  <td>18.5 – 24.9</td>
                  <td>Normal</td>
                </tr>

                <tr>
                  <td>25.0 – 29.9</td>
                  <td>Overweight</td>
                </tr>

                <tr>
                  <td>30.0 – 34.9</td>
                  <td>Obesity Class I</td>
                </tr>

                <tr>
                  <td>35.0 – 39.9</td>
                  <td>Obesity Class II</td>
                </tr>

                <tr>
                  <td>40.0+</td>
                  <td>Obesity Class III</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
