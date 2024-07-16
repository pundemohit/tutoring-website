import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import image from '../../assests/pic1.PNG'
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

const Landing = () => {
    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box sx={{ padding: '5rem' }}>
                            <p style={{ color: '#f59300', fontWeight: 'bold' }}>100% SATISFACTION GUARANTEE</p>
                            <h1 style={{ fontSize: '3.7rem', fontWeight: 'bold', marginTop: '-1rem' }}>Find Your Perfect Tutor</h1>
                            <p style={{ fontSize: '1.1rem', color: '#6e6962', marginTop: '-1rem' }}>We help you find perfect tutor for 1-on-1 lessons. <br />It is completely free and private</p>

                            <Grid container spacing={0}>
                                <Grid item>
                                    <Button sx={{ backgroundColor: '#fada3c', borderRadius: '2rem', color: 'black', padding: '10px 25px', border: '0px solid black', textTransform: 'none' }}>Get started</Button>
                                </Grid>
                                <Grid item xs={2}>
                                    <IconButton aria-label="play" sx={{ backgroundColor: '#cbeef7', color: 'blue', marginLeft: '1rem', marginTop: '4px' }}>
                                        <PlayArrowIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={4}>
                                    <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>See how it works</p>
                                </Grid>

                            </Grid>


                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box>
                            <img src={image} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ backgroundColor: '#0066FF', marginTop: '4rem' ,padding:'1.5rem 0rem'}}>
                <Container >
                    <Grid container spacing={1} sx={{ color: 'white' }}>

                        <Grid item xs={3} >
                            <h1 style={{ marginLeft: "6rem" }}>870</h1>
                            <p style={{ marginLeft: "6rem", marginTop: '-1rem' }}>Expert tutors</p>
                        </Grid>

                        <Divider orientation="vertical" variant="middle" flexItem style={{
                            backgroundColor: 'white', // Customize the color here
                            margin: '16px 0', // Add margin if desired
                        }} />

                        <Grid item xs={3}>

                            <h1 style={{ marginLeft: "1rem" }}>20,000+</h1>
                            <p style={{ marginLeft: "1rem", marginTop: '-1rem' }}>Hours tutored</p>
                        </Grid>

                        <Divider orientation="vertical" variant="middle" flexItem style={{
                            backgroundColor: 'white', // Customize the color here
                            margin: '16px 0', // Add margin if desired
                        }} />

                        <Grid item xs={3}>
                            <h1 style={{ marginLeft: "1rem" }}>298</h1>
                            <p style={{ marginLeft: "1rem", marginTop: '-1rem' }}>Subjects and courses</p>
                        </Grid>

                        <Divider orientation="vertical" variant="middle" flexItem style={{
                            backgroundColor: 'white', // Customize the color here
                            margin: '16px 0', // Add margin if desired
                        }} />
                        <Grid item xs={2.6}>
                            <h1 style={{ marginLeft: "1rem" }}>72,920</h1>
                            <p style={{ marginLeft: "1rem", marginTop: '-1rem' }}>Students</p>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Landing
