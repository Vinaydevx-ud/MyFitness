import "./Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
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

      <div className="Quick-Actions">
        <h2>Quick Actions</h2>
        <p>Access your most used tools</p>

        <div className="features">
          <div className="BMI-card" id="bmi">
            <h2>BMI Calculator</h2>
            <p>Check your Body Mass Index</p>

            <Link to="/body" className="arrowbutton-bmi">
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="PROTEIN-card" id="protein">
            <h2>Protein Intake</h2>
            <p>Check your Protein Intake</p>

            <Link to="/protein" className="arrowbutton-protein">
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="GOAL-card" id="goal">
            <h2>Current Goal</h2>
            <p>Weight Loss</p>

            <Link to="/goal" className="arrowbutton-goal">
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>

        <div className="footer">
          <div className="footerfeatures">
            <div className="mealbox">
              <h2>Food Suggestions</h2>
              <p>Choose meal type</p>

              <Link to="/protein" className="foodbutton">
                Veg
              </Link>
              <Link to="/protein" className="foodbutton">
                Non-Veg
              </Link>
            </div>

            <div className="progress-card">
              <h2>Weekly Progress</h2>

              <div className="progress-row">
                <span>Weight</span>
                <span>65 kg</span>
              </div>

              <div className="progress-row">
                <span>BMI</span>
                <span>25.1</span>
              </div>
            </div>

            <div className="stats-card">
              <h2>Today's Stats</h2>

              <div className="stat">
                <span>Calories</span>
                <span>1850 kcal</span>
              </div>

              <div className="stat">
                <span>Water Intake</span>
                <span>2.5 L</span>
              </div>

              <div className="stat">
                <span>Workout Time</span>
                <span>45 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
