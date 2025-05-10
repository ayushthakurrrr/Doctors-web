import React from 'react';
import '../css/Meditation.css'; // Make sure this path is correct

const MeditationPage = () => {
  return (
    <div className="meditation-container">
      <div className="meditation-content">
        <h1 className="meditation-title">Sit and Relax</h1>
        <p className="meditation-subtitle">This exercise will help to calm yourself.</p>
        <h2 className="timer-title">Choose the timer</h2>

        <div className="timer-buttons-container">
          <button className="timer-button">90 min</button>
          <button className="timer-button">60 min</button>
          <button className="timer-button">30 min</button>
          <button className="timer-button">15 min</button>
        </div>

        {/* Custom Timer Text */}
        <p className="custom-timer">Custom Timer</p>
      </div>
    </div>
  );
};

export default MeditationPage;
