import HealthDataForm from './components/HealthDataForm';
import HealthData from './components/HealthData';

import './App.css';

function App() {
  return (
    <>
      <h1 className="app">Dashboard</h1>
      <HealthDataForm />
      <HealthData />
    </>
  );
}

export default App;
