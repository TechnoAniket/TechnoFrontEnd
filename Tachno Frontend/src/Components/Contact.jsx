import { Box, Button, TableRow, TextField } from '@mui/material';
import { lightBlue, pink, red } from '@mui/material/colors';
import React from 'react'

const Contact = () => {
  return (
    <Box  sx={{display:'flex'}} padding="20px" width={500} height={600}  margin='75px auto' border={1} boxShadow={10} borderRadius={4}> 

    <Box color={red} width="100%" display={'flex'} justifyContent={'space-around'} flexDirection={'column'} >
    <h4 style={{textAlign:'center',borderBottom:"2px"}}>Contact Us</h4>
     <TextField  
          fullWidth
          required
          id="outlined-required"
          label="Name"
          placeholder='Enter Your Name'
        />
     <TextField  
      
          fullWidth
          required
          id="outlined-required"
          label="Number"
          placeholder='Enter Your Number'
        />
     <TextField  
          fullWidth
          required
          id="outlined-required"
          label="Password"
          placeholder='Enter Your Password'
        />

        <Button type='submit' sx={{backgroundColor:lightBlue}}>Submit</Button>
      
      
    <p>
      <strong>Email:</strong> info@example.com<br />
      <strong>Phone:</strong> +1 (555) 123-4567<br />
      <strong>Address:</strong> 123 Main Street, City, Country, ZIP<br />
      <strong>Social Media:</strong><br />
      - Facebook: <a href="https://www.facebook.com/example">facebook.com/example</a><br />
      - Twitter: <a href="https://twitter.com/example">twitter.com/example</a><br />
      - LinkedIn: <a href="https://www.linkedin.com/company/example">linkedin.com/company/example</a><br />
    </p>
    
        </Box>

   
    </Box>

  )
}

export default Contact;