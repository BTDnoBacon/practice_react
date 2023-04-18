import React from 'react';
import Navbar from './component/Navbar';
import Mainsection from './component/Mainsection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Mainsection />
    </div>
  );
}

export default App;
