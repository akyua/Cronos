import './App.css';
import Settings from './Components/Settings';
import Timer from './Components/Timer';
import { useState } from 'react';

function App() {

  const [showSettings, setShowSettings] = useState(true);

  return (
    <main>
      {showSettings ? <Settings /> : <Timer />}
    </main>
  );
}

export default App;
