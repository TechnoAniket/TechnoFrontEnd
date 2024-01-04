import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Feature from './Components/Feature';
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import Add from './Components/Add';

import { useState } from 'react';

function App() {
  const [mode,setMode] = useState("light")
  const darkTheme = createTheme({
    palette:{
      mode:mode,
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Header/>
      <Stack direction={'row'} spacing={3} justifyContent={'space-between'}>
        <Feature setMode={setMode} mode={mode} />
        <Hero />
      </Stack>
      <Add/>
     
    </Box>
    </ThemeProvider>
  );
}


export default App;
