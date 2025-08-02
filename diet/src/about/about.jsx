import React, { useState } from 'react';
import { FaCode, FaDumbbell, FaBrain, FaGraduationCap, FaRunning, FaHeart, FaAward } from 'react-icons/fa';
import './about.css';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('fitness');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const fitnessAchievements = [
    { icon: <FaRunning />, title: "Personal Training", description: "Helped 10+ clients achieve their fitness goals" },
    { icon: <FaDumbbell />, title: "Powerlifting", description: "Competed in 3 regional powerlifting competitions" },
    { icon: <FaHeart />, title: "Nutrition", description: "Developed personalized meal plans for various body types" }
  ];

  const techSkills = [
    { name: 'Python', level: 85, color: '#3498db' },
    { name: 'Machine Learning', level: 80, color: '#2980b9' },
    { name: 'React', level: 75, color: '#3498db' },
    { name: 'Data Analysis', level: 85, color: '#2980b9' }
  ];

  return (
    <section id="about" className="about-section" style={{ backgroundColor: 'white' }}>
      <div className="about-container">
        <div className="about-header">
          <h2>About <span style={{ color: '#3498db' }}>Me</span></h2>
          <p style={{ color: '#7f8c8d' }}>CS Student & Fitness Enthusiast</p>
        </div>

        <div className="about-content">
          <div className="profile-card" style={{ 
            backgroundColor: 'white',
            boxShadow: '0 5px 15px rgba(52, 152, 219, 0.1)'
          }}>
            <div className="profile-image">
              <div className="image-placeholder"></div>
              <div className="tech-fitness-badge" style={{ backgroundColor: 'white' }}>
                <FaCode className="tech-icon" style={{ color: '#3498db' }} />
                <FaDumbbell className="fitness-icon" style={{ color: '#3498db' }} />
              </div>
            </div>
            <div className="profile-info">
              <h3 style={{ color: '#2c3e50' }}>Wasif khalil</h3>
              <p style={{ color: '#7f8c8d' }}>High School CS/ML Student | Personal Trainer</p>
            </div>
          </div>

          <div className="details-section" style={{ 
            backgroundColor: 'white',
            boxShadow: '0 5px 15px rgba(52, 152, 219, 0.1)'
          }}>
            <div className="tabs">
              <button 
                className={activeTab === 'fitness' ? 'active' : ''}
                onClick={() => setActiveTab('fitness')}
                style={{ color: activeTab === 'fitness' ? '#3498db' : '#7f8c8d' }}
              >
                <FaDumbbell style={{ color: activeTab === 'fitness' ? '#3498db' : '#7f8c8d' }} /> Fitness Journey
              </button>
              <button 
                className={activeTab === 'tech' ? 'active' : ''}
                onClick={() => setActiveTab('tech')}
                style={{ color: activeTab === 'tech' ? '#3498db' : '#7f8c8d' }}
              >
                <FaCode style={{ color: activeTab === 'tech' ? '#3498db' : '#7f8c8d' }} /> Tech Skills
              </button>
              <button 
                className={activeTab === 'education' ? 'active' : ''}
                onClick={() => setActiveTab('education')}
                style={{ color: activeTab === 'education' ? '#3498db' : '#7f8c8d' }}
              >
                <FaGraduationCap style={{ color: activeTab === 'education' ? '#3498db' : '#7f8c8d' }} /> Education
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'fitness' && (
                <div className="fitness-content">
                  <h3 style={{ color: '#2c3e50' }}>My Fitness Philosophy</h3>
                  <p style={{ color: '#7f8c8d' }}>
                    Combining my passion for computer science with fitness to create data-driven 
                    training programs.
                  </p>
                  <div className="achievements-grid">
                    {fitnessAchievements.map((item, index) => (
                      <div 
                        key={index} 
                        className="achievement-card"
                        style={{ 
                          backgroundColor: '#f8f9fa',
                          borderTop: `3px solid #3498db`
                        }}
                      >
                        <div className="achievement-icon" style={{ color: '#3498db' }}>
                          {item.icon}
                        </div>
                        <h4 style={{ color: '#2c3e50' }}>{item.title}</h4>
                        <p style={{ color: '#7f8c8d' }}>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'tech' && (
                <div className="tech-content">
                  <h3 style={{ color: '#2c3e50' }}>Technical Skills</h3>
                  <p style={{ color: '#7f8c8d' }}>
                    Applying machine learning to analyze fitness data and optimize training regimens.
                  </p>
                  <div className="skills-container">
                    {techSkills.map((skill, index) => (
                      <div 
                        key={index} 
                        className="skill-bar"
                        onMouseEnter={() => setHoveredSkill(index)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="skill-info">
                          <span style={{ color: '#2c3e50' }}>{skill.name}</span>
                          <span style={{ color: '#3498db' }}>
                            {hoveredSkill === index ? `${skill.level}%` : ''}
                          </span>
                        </div>
                        <div 
                          className="skill-progress"
                          style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)' }}
                        >
                          <div 
                            className="skill-level" 
                            style={{
                              width: `${skill.level}%`,
                              backgroundColor: skill.color,
                              opacity: hoveredSkill === index ? 1 : 0.8
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'education' && (
                <div className="education-content">
                  <h3 style={{ color: '#2c3e50' }}>Education & Certifications</h3>
                  <div className="timeline">
                    <div className="timeline-item">
                      <div 
                        className="timeline-icon"
                        style={{ backgroundColor: '#3498db' }}
                      >
                        <FaGraduationCap />
                      </div>
                      <div 
                        className="timeline-content"
                        style={{ backgroundColor: '#f8f9fa' }}
                      >
                        <h4 style={{ color: '#2c3e50' }}>High School Student</h4>
                        <p style={{ color: '#7f8c8d' }}>City School (CCI) | 2024-2026</p>
                        <p style={{ color: '#7f8c8d' }}>Focus: Computer Science & Mathematics</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div 
                        className="timeline-icon"
                        style={{ backgroundColor: '#3498db' }}
                      >
                        <FaBrain />
                      </div>
                      <div 
                        className="timeline-content"
                        style={{ backgroundColor: '#f8f9fa' }}
                      >
                        <h4 style={{ color: '#2c3e50' }}>Machine Learning Specialization</h4>
                        <p style={{ color: '#7f8c8d' }}>Online Course | 2024</p>
                        <p style={{ color: '#7f8c8d' }}>Read "Introduction to Machine Learning with Python" Book</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div 
                        className="timeline-icon"
                        style={{ backgroundColor: '#3498db' }}
                      >
                        <FaAward />
                      </div>
                      <div 
                        className="timeline-content"
                        style={{ backgroundColor: '#f8f9fa' }}
                      >
                        <h4 style={{ color: '#2c3e50' }}>NUST Certified Intenship</h4>
                        <p style={{ color: '#7f8c8d' }}>2025</p>
                        <p style={{ color: '#7f8c8d' }}>Learned AI models and Robotics</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;