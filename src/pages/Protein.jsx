import { useState,useEffect } from "react";
import "./Protein.css";
import { Link } from "react-router-dom";

function Protein() {
  
  const [weight,setWeight] = useState("");
  const [goal, setGoal] = useState("fatLoss");
  const [protein,setProtein] = useState(null);
  const [consumed,setConsumed] = useState("");

  const remaining = protein !== null ? protein - consumed : 0;

  const progress = protein !== null ? Math.min((consumed / protein) * 100, 100) : 0;

  const calculateProtein = () => {
    if(!weight){
      return;
    }
    const proteinPerKg = {
      fatLoss: 1.8,
      leanMuscle: 2.3,
      Bulk: 2,
    };
    const calculateProtein = weight *proteinPerKg[goal];
    setProtein(calculateProtein)

  };

  useEffect(() => {
    const savedWeight = JSON.parse(localStorage.getItem("weight"));
    if(savedWeight){
      setWeight(savedWeight)
    }
  },[])
  
  useEffect(() => {
    localStorage.setItem("weight", JSON.stringify(weight)
    );
  },[weight])

  useEffect(() => {
    const savedGoal = JSON.parse(localStorage.getItem("goal"));
    if (savedGoal) {
      setWeight(savedGoal);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("goal", JSON.stringify(goal));
  },[goal]);

  


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

      <div className="protein-calculations-top">
        <div className="protein-requirement-calculator">
          <h2>
            <i className="fa-solid fa-calculator"></i>
            Protein Requirement Calculator
          </h2>

          <div className="weight-section">
            <span>
              <i className="fa-solid fa-weight-scale"></i>
              Weight(kg)
            </span>

            <div className="weight-input">
              <input
                type="number"
                placeholder="Enter Your Weight (in Kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </div>

          <div className="goal-section">
            <span>
              <i className="fa-solid fa-bullseye"></i>
              Goal
            </span>

            <div className="goal-input">
              <label htmlFor="target">Choose Your Goal:</label>

              <select value={goal} onChange={(e) => setGoal(e.target.value)}>
                <option value="fatLoss">Fat-Loss</option>
                <option value="leanMuscle">Lean-Muscle Mass</option>
                <option value="Bulk">Bulk</option>
              </select>
            </div>
          </div>

          <div className="calculate-btn">
            <button onClick={calculateProtein}>
              Calculate Protein
              <i className="fa-solid fa-calculator"></i>
            </button>
          </div>

          <div className="recommended-protein-intake">
            <h3>Recommended Protein Intake</h3>

            <h2>{protein  ? protein : "--"} gm </h2>
          </div>
        </div>
        <div className="daily-protein-progress">
          <h2>
            <i className="fa-solid fa-bars-progress"></i>
            Daily Protein Progress
          </h2>

          <div className="goal">
            <span>
              <i className="fa-solid fa-bullseye"></i>
              Goal
            </span>
            <span>{protein  ? protein : "--"} gm</span>
          </div>

          <div className="consumed">
            <span>
              <i className="fa-regular fa-circle-check"></i>
              Consumed
            </span>

            <input
              type="number"
              placeholder="Add protein"
              value={consumed}
              onChange={(e) => setConsumed(e.target.value)}
            />
          </div>

          <div className="remaining">
            <span>
              <i className="fa-regular fa-clock"></i>
              Remaining
            </span>
            <span>{remaining ? remaining : "--"} gm</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <h3>
            You are doing great keep it up!
            <i className="fa-solid fa-fire"></i>
          </h3>
        </div>
      </div>

      <div className="protein-calculations-bottom">
        <div className="protein-sources" id="protein-sources">
          <h2>Top Protein Sources</h2>

          <table>
            <thead>
              <tr>
                <th>
                  <i className="fa-solid fa-bowl-food"></i>
                  Food (per 100 gm)
                </th>

                <th>Protein (in gm)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <i className="fa-solid fa-bowl-rice"></i>
                  Soya Chunks
                </td>
                <td>52</td>
              </tr>

              <tr>
                <td>
                  <i className="fa-solid fa-drumstick-bite"></i>
                  Chicken Breast
                </td>
                <td>31</td>
              </tr>

              <tr>
                <td>
                  <i className="fa-solid fa-fish-fins"></i>
                  Fish (Rohu, Pomfret)
                </td>
                <td>19 - 22</td>
              </tr>

              <tr>
                <td>
                  <i className="fa-solid fa-cheese"></i>
                  Paneer
                </td>
                <td>18 - 20</td>
              </tr>

              <tr>
                <td>
                  <i className="fa-solid fa-plate-wheat"></i>
                  Dals / Chana
                </td>
                <td>19 - 24</td>
              </tr>

              <tr>
                <td>
                  <i className="fa-solid fa-egg"></i>
                  Eggs
                </td>
                <td>6</td>
              </tr>

              <tr>
                <td>
                  <i className="fa-solid fa-bottle-water"></i>
                  Milk
                </td>
                <td>3.4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Protein;
