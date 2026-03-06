import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [number, setNumber] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setNumber(number + 1);
    }, 1000);
  }, [number]);
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
