import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Meditation from './pages/Meditation';
import DailySchedule from './pages/DailySchedule';
import Staff from './pages/Staff';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/schedule" element={<DailySchedule />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </Router>
  );
}

export default App;
