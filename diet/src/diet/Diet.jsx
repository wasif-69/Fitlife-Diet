import React from 'react';
import './diet.css'; // We'll define this CSS below

const DietPlanDisplay = ({ data }) => {
  if (!data) return <p>Loading...</p>;

  const plan = data.Diet_plan;

  return (
    <section className="diet-plan-section">
      <h2 className="section-title">Your Personalized Diet Plan</h2>

      <div className="info-grid">
        <div><strong>Diet Type:</strong> {plan.Diet_Type}</div>
        <div><strong>Gender:</strong> {plan.Gender}</div>
        <div><strong>Age:</strong> {plan.Age}</div>
        <div><strong>BMI:</strong> {plan.BMI}</div>
        <div><strong>Calories:</strong> {data.calories}</div>
        <div><strong>Activity:</strong> {plan.Physical_Activity_Level}</div>
        <div><strong>Adherence:</strong> {plan.Adherence_to_Diet_Plan}</div>
      </div>

      <div className="meal-section">
        <h3>🕗 Morning</h3>
        <ul>{plan.Morning.map((item, i) => <li key={i}>{item}</li>)}</ul>

        <h3>🍱 Lunch</h3>
        <ul>{plan.Lunch.map((item, i) => <li key={i}>{item}</li>)}</ul>

        <h3>☕ Evening Snack</h3>
        <ul>{plan.Evening_Snack.map((item, i) => <li key={i}>{item}</li>)}</ul>

        <h3>🌙 Dinner</h3>
        <ul>{plan.Dinner.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </div>
    </section>
  );
};

export default DietPlanDisplay;
