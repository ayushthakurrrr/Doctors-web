import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/meditation')}>Go to Meditation</button>
      <button onClick={() => navigate('/schedule')}>Go to Daily Schedule</button>
      <button onClick={() => navigate('/staff')}>Go to Staff</button>
    </div>
  );
}

export default Home;
