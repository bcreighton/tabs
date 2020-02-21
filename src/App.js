import React from 'react';
import Tabs from './components/Tabs';
import tabsProp from './components/TabsProp';

function App() {
  return (
    <div className="App">
      <Tabs tabs={tabsProp} />
    </div>
  );
}

export default App;
