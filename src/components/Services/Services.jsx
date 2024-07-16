import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import WatchLaterSharpIcon from '@mui/icons-material/WatchLaterSharp';
import InventorySharpIcon from '@mui/icons-material/InventorySharp';
import LocalAtmSharpIcon from '@mui/icons-material/LocalAtmSharp';

const Services = () => {
    return (
        <>
            <Box sx={{ marginTop: '4rem' }}>
                <p style={{ color: '#f59300', fontWeight: 'bold', textAlign: 'center' }}>WHY CHOOSE US</p>
                <p style={{ fontSize: '2rem', marginTop: '-1rem', fontWeight: "bolder", textAlign: 'center' }}>Benifits of online tutoring <br /> services with us </p>
                <Container sx={{ margin: '0rem 7rem' }}>
                    <Grid container spacing={0} >
                        <Grid item xs={2.5} sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', margin: '1rem', padding: '1rem', borderRadius: '10px' }}>
                            <PeopleAltSharpIcon sx={{ color: 'white', backgroundColor: 'blue', padding: '0.5rem', borderRadius: '10px' }} />
                            <h4 style={{ marginTop: '10px' }}>One-on-one Teaching</h4>
                            <p style={{ marginTop: '-15px' }}>All of our special education experts have a degree in special education</p>
                        </Grid>
                        <Grid item xs={2.5} sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', margin: '1rem', padding: '1rem', borderRadius: '10px' }}>
                            <WatchLaterSharpIcon sx={{ color: 'white', backgroundColor: '#93ff26', padding: '0.5rem', borderRadius: '10px' }} />
                            <h4 style={{ marginTop: '10px' }}>One-on-one Teaching</h4>
                            <p style={{ marginTop: '-15px' }}>All of our special education experts have a degree in special education</p>
                        </Grid>
                        <Grid item xs={2.5} sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', margin: '1rem', padding: '1rem', borderRadius: '10px' }}>
                            <InventorySharpIcon sx={{ color: 'white', backgroundColor: 'orange', padding: '0.5rem', borderRadius: '10px' }} />
                            <h4 style={{ marginTop: '10px' }}>One-on-one Teaching</h4>
                            <p style={{ marginTop: '-15px' }}>All of our special education experts have a degree in special education</p>
                        </Grid>
                        <Grid item xs={2.5} sx={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', margin: '1rem', padding: '1rem', borderRadius: '10px' }}>
                            <LocalAtmSharpIcon sx={{ color: 'white', backgroundColor: 'pink', padding: '0.5rem', borderRadius: '10px' }} />
                            <h4 style={{ marginTop: '10px' }}>One-on-one Teaching</h4>
                            <p style={{ marginTop: '-15px' }}>All of our special education experts have a degree in special education</p>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Services
