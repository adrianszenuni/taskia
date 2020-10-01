import React from 'react';
import './App.css';
import FeaturedServices from './components/FeaturedServices/FeaturedServices';
import Header from './components/Header/Header';
import ManagementTool from './components/ManagementTool/ManagementTool';
import SeamlessTeam from './components/SeamlessTeam/SeamlessTeam';
import Statistics from './components/Statistics/Statistics';
import SubscribeLetter from './components/SubscribeLetter/SubscribeLetter';
import WhyTaskManagement from './components/WhyTaskManagement/WhyTaskManagement';

function App() {
  return (
    <div className="container-fluid p-0">
      <div className="App">
        <Header/>
        <ManagementTool/>
        <FeaturedServices/>
        <WhyTaskManagement/>
        <SeamlessTeam/>
        <Statistics/>
      </div>
      <SubscribeLetter/>
    </div>
  );
}

export default App;
