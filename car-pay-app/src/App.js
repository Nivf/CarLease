import './App.css';
import React from 'react';
import { Typography } from '@mui/material';
import DataForm from './components/dataForm';
import PricingInfo from './components/PricingInfo';


function App() {
  return (
    <div className="App">
      <Typography variant="h4">Car Leasing Cost</Typography>
      <DataForm/>
      <PricingInfo/>
    </div>
  );
}

export default App;
