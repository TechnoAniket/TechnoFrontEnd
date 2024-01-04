import { Box } from '@mui/material';
import React from 'react'
import Posts from './Posts';
import Contact from './Contact';

const Hero = () => {
  return (
    <Box  flex={19} p={2}>
        <Posts/>
        <Posts/>
        <Posts/>
        <Contact/>
    </Box>
  )
}

export default Hero;