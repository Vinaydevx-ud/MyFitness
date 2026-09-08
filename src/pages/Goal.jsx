import "./Goal.css";
import { Link } from "react-router-dom";
import {useState,useEffect} from 'react'

function Goal() {
  const [goal, setGoal] = useState("fat-loss");
  const [targetDate, setTargetDate] = useState(() => {
    const savedtargetDate = JSON.parse(localStorage.getItem("targetDate"));
    return savedtargetDate ? savedtargetDate : "DD/MM/YYYY"
  });
  const [targetWeight,setTargetWeight] = useState(() => {
    const savedtargetWeight = JSON.parse(localStorage.getItem("targetWeight"));
    return savedtargetWeight ? savedtargetWeight : "0";
  });
  const [currentWeight,setCurrentWeight] = useState("");

  const weightProgress =
   targetWeight && currentWeight ? Math.min((currentWeight / targetWeight) * 100, 100):0;

  

  useEffect (() => {
    localStorage.setItem("targetDate",JSON.stringify(targetDate)
    )
  },[targetDate])

  
  useEffect(() => {
    localStorage.setItem("targetWeight", JSON.stringify(targetWeight));
  }, [targetWeight]);

  

  
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

      <section className="goal-section">
        <p>Track your fitness goal every day.</p>

        <div className="goal-top">
          <div className="goal-card">
            <i className="fa-solid fa-bullseye"></i>

            <h3>Current Goal</h3>

            <div className="goal-card-select">
              <select value={goal} onChange={(e) => setGoal(e.target.value)}>
                <option value="fat-loss">Fat-Loss</option>
                <option value="fat-gain">Fat-Gain</option>
              </select>
              <p>
                Current Goal: {goal === "fat-loss" ? "Fat Loss" : "Fat Gain"}
              </p>
            </div>
          </div>

          <div className="goal-card">
            <i className="fa-solid fa-calendar-days"></i>
            <h3>Set Target</h3>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
            />
            <h3>Target Weight</h3>
            <input
              type="number"
              value={targetWeight}
              onChange={(e) => setTargetWeight(e.target.value)}
            />
          </div>
        </div>

        <div className="progress-card-goal">
          <h3 className="heading-current-progress">Current Progress</h3>

          <div className="goal-info">
            <span>Current Weight</span>

            <input
              type="number"
              name="currentWeight"
              id="currentWeight"
              value={currentWeight}
              onChange={(e) => setCurrentWeight(Number(e.target.value))}
            />
          </div>

          <div className="goal-info">
            <span>Target Weight</span>
            <span>{targetWeight ? targetWeight : "--"} kg</span>
          </div>

          <div className="goal-progress-bar">
            <div
              className="goal-progress-fill"
              style={{ width: `${weightProgress}%` }}
            ></div>
          </div>

          <p>{Math.round(weightProgress)} % Goal Reached</p>
        </div>

        <div className="goal-bottom">
          <div className="checklist">
            <h3>Daily Checklist</h3>

            <label>
              <input type="checkbox" />
              Workout
            </label>

            <label>
              <input type="checkbox" />
              Protein Goal
            </label>

            <label>
              <input type="checkbox" />
              Water Intake
            </label>

            <label>
              <input type="checkbox" />
              Sleep 8 Hours
            </label>
          </div>

          <div className="streak-card">
            <h3>Current Streak</h3>

            <h1>5 Days</h1>

            <p>Keep Going!</p>
          </div>
        </div>

        <div className="motivation-card">
          <h3>Daily Motivation</h3>

          <p>"Discipline is choosing what you want most."</p>
        </div>
      </section>
    </>
  );
}

export default Goal;
