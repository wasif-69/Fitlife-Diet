// DietForm.jsx
import React, { useState,useEffect,useContext} from 'react';
import './input.css';
import { BrowserRouter as Router, Routes, Route, data } from 'react-router-dom';
import DietPlanDisplay from '../diet/Diet';
import { ValueContext } from '../ValueContext';



const DietForm = () => {
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    sex: '',
    age: '',
    activity: '',
    discipline: 5,
    motive: ''
  });

   const { value, setValue } = useContext(ValueContext);
 


  const [data_recieves,setdata]=useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your input has been submitted! (Mock functionality)');
    // You can add logic here to process or display results
  };

  const api_request = () =>{
    setValue(prev => prev + 1)

    fetch('https://fitlife-diet-6f0a.onrender.com/request', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'},
    body: JSON.stringify({formData})
  })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setdata(data);
      });

      
      
  }

  return (
    <>

    <section className="diet-form-section">
      <div className="diet-form-container">
        <h2>Get Your Custom Diet Plan</h2>
        <form onSubmit={handleSubmit} className="diet-form">

          <label>Weight (kg):
            <input type="number" name="weight" value={formData.weight} onChange={handleChange} required />
          </label>

          <label>Height (cm):
            <input type="number" name="height" value={formData.height} onChange={handleChange} required />
          </label>

          <label>Sex:
            <select name="sex" value={formData.sex} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label>Age:
            <input type="number" name="age" value={formData.age} onChange={handleChange} required />
          </label>

          <label>Activity Level:
            <select name="activity" value={formData.activity} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="sedentary">sedentary</option>
              <option value="light">Light Activity</option>
              <option value="moderate">Moderate Activity</option>
              <option value="active">Very Active</option>
              <option value="athlete">Athlete Level</option>
            </select>
          </label>

          <label>Discipline to Diet (1–10):
            <input type="range" name="discipline" min="1" max="10" value={formData.discipline} onChange={handleChange} />
            <span>{formData.discipline}</span>
          </label>

          <label>Motive:
            <select name="motive" value={formData.motive} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="weight_loss">Weight Loss</option>
              <option value="muscle_gain">Muscle Gain</option>
              <option value="healthy_life">Healthy Life</option>
              <option value="fit">Stay Fit</option>
              <option value="tension_free">Tension Free</option>
            </select>
          </label>

          <button type="submit" className="submit-btn" onClick={api_request}>Submit</button>
        </form>
      </div>
    </section>
     

      <DietPlanDisplay data={data_recieves} />

    
    </>
  );
};

export default DietForm;
