import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import image from '../../assests/schedule.png'
import Button from '@mui/material/Button';
const Schedule = () => {
    return (
        <>
            <Container >
                <Grid container sx={{ padding: '3rem' }}>
                    <Grid item xs={5}>
                        <img src={image} alt="" />
                    </Grid>
                    <Grid item xs={7} sx={{paddingLeft:'1rem'}}>
                        <p style={{ color: '#f59300', fontWeight: 'bold', marginTop:'4rem', }}>CUSTOMIZE WITH YOUR SCHEDULE</p>
                        <p style={{ fontSize: '1.7rem', marginTop: '0rem', fontWeight: "bolder" }}>Personalized Professional <br /> Online Tutor on Your Scedule </p>
                        <p style={{ fontSize: '1.1rem', color: '#6e6962', marginTop: '-1rem' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error amet debitis est incidunt dignissimos ad perspiciatis neque quaerat dicta quibusdam corporis doloremque, natus saepe earum eum quo architecto harum!
                        </p>
                        <Button sx={{ backgroundColor: '#fada3c', borderRadius: '2rem', color: 'black', padding: '6px 20px', border: '0px solid black', textTransform: 'none' }}>Get started</Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Schedule
