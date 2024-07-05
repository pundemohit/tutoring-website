import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import logo from '../../assests/logo.PNG'

function Navbar() {
    return (
        <div className="App">
            <AppBar position="static" sx={{backgroundColor:'white',  textTransform: 'none'}}>
                <Toolbar>
                    <Box sx={{ display: 'flex', flexGrow: 1, paddingLeft: '6rem' }}>
                        <img src={logo} alt="Logo" style={{ width: 90, marginRight: 10, }} />
                        
                    </Box>
                    <Box sx={{ flexGrow: 1, display: 'flex', color:'grey', fontFamily:'sans-serif',textTransform: 'none' }}>
                        <Button color="inherit" sx={{color:'blue', textDecoration: 'underline', textTransform: 'none'}}>Home</Button>
                        <Button color="inherit" sx={{textTransform: 'none'}}>For Student</Button>
                        <Button color="inherit"  sx={{textTransform: 'none'}}>Resources</Button>
                        <Button color="inherit"  sx={{textTransform: 'none'}}>About us</Button>
                        <Button color="inherit"  sx={{textTransform: 'none'}}>Contact us</Button>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: 'flex', color:'black'}}>
                        <Button color="inherit">Sign in</Button>
                        <Button variant="contained" sx={{borderRadius:'2rem'}}>Register</Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box sx={{backgroundColor:'#f7d736', marginTop:'-1.5rem', textAlign:'center'}}>
                <p style={{padding:'4px'}}>Are you a university or school student for an online tutoring patnership? <span style={{color:'blue'}}>Talk to us</span></p>
            </Box>
        </div>
    );
}

export default Navbar;
