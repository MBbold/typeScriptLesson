import { AppBar, Button, Input, TextField, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import axios, { AxiosResponse } from "axios";


function App() {
  const [webUrl, setWebUrl] = useState <String>();
  const [shortUrl, setShortUrl] = useState("");
  const inputUrlHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setWebUrl(e.currentTarget.value);
}
const inputHandler = () => {
  console.log('inputHandler called');
}
const fetchData: () => void = async () => {
  try {
    const res: AxiosResponse = await axios.get(
      `https://api.shrtco.de/v2/shorten?url=${webUrl}`
    );
    setShortUrl(res.data.result.full_short_link);
  } catch (e) {
    console.log(e);
  }
};
  return (
    <div className="App">
        <AppBar position='static' color='transparent'>
          <Toolbar disableGutters sx={{display:"flex", justifyContent:"flex-end", gap:10}}>
            <Typography sx={{color:"#00B589", fontWeight:800}}>
                Хэрхэн ажилладаг вэ?
              </Typography>
              <Button variant='contained' sx={{p:"5px 50px", backgroundColor:"#00B589", fontWeight:800, borderRadius:"20px"}}>Нэвтрэх</Button>
          </Toolbar>
        </AppBar>
        <Box m={10}>
          <InsertLinkIcon sx={{color:"#00B589", fontSize:100}}/>
          <Typography variant='h2' sx={{fontFamily: 'Lobster Two', color:"#00B589", fontWeight:500}}>
            Boginoo
          </Typography>
        </Box>
        <Box m={10} sx={{gap:3, display:'flex', justifyContent:'center'}}>
          <TextField onChange={inputUrlHandler} variant="outlined" sx={{width:600}} autoFocus placeholder="http://huudas.mn" size='small'/>
          <Button onClick={fetchData} variant='contained' sx={{p:"5px 50px", backgroundColor:"#00B589", fontWeight:800, borderRadius:"20px"}}>Богиносгох</Button>
        </Box>
        <Box m={10}>
          <Typography>Өгөгдсөн холбоос:</Typography>
          <Typography>{webUrl}</Typography>
        </Box>
        <Box m={10}>
          <Typography>Богино холбоос:</Typography>
          <Typography>{shortUrl}</Typography>
          <Button onClick={()=>navigator.clipboard.writeText(shortUrl)}>Copy</Button>
        </Box>
    </div>
  );
}

export default App
