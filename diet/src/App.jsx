import { useState } from 'react';
import './App.css';
import DietPlanDisplay from './diet/Diet';
import PerformanceFitnessDiet from './Fitness/Fitness';
import Header from './headers/Header';
import HealthCareDiet from './Health/Health';
import DietForm from './inputs/input';
import Main from './main/Main';
import WeightLossProgram from './Weight_loss/Weight';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './footer/footer';
import AboutMe from './about/about';
import { ValueProvider } from './ValueContext'; // ✅ Make sure this path is correct

function App() {
  const [data, setdata] = useState(null);

  return (
    <ValueProvider> {/* ✅ Wrap everything inside */}
      <Router>
        <Header />
        <Routes>
          <Route path='/form' element={<DietForm data={data} setdata={setdata} />} />
          <Route path='/aboutus' element={<AboutMe />} />
          <Route
            path='/'
            element={
              <>
                <Main />
                <WeightLossProgram />
                <HealthCareDiet />
                <PerformanceFitnessDiet />
                <AboutMe />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </ValueProvider>
  );
}

export default App;
