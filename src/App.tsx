import { Button, Typography } from '@mui/material';
import React from 'react';
import './App.css';



function App() {
  return (
    <div className="App">
      <Typography sx={{color:"#00B589", fontWeight:800}}>
        Хэрхэн ажилладаг вэ?
      </Typography>
      <Button variant='contained' sx={{backgroundColor:"#00B589", fontWeight:800}}>Нэвтрэх</Button>
    </div>
  );
}

export default App
