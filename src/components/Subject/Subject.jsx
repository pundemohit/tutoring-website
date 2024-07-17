import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import Button from '@mui/material/Button';
import TerminalIcon from '@mui/icons-material/Terminal';
import TranslateIcon from '@mui/icons-material/Translate';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Subject = () => {
    return (
        <>
            <Container sx={{ padding: '4rem', marginLeft: '5rem', marginRight: '5rem' }}>
                <p style={{ color: '#f59300', fontWeight: 'bold', marginTop: '4rem', textAlign: 'center' }}>CUSTOMIZE WITH YOUR SCHEDULE</p>
                <p style={{ fontSize: '1.7rem', marginTop: '0rem', fontWeight: "bolder", textAlign: 'center' }}>Find Online Tutor in Any Subject </p>
                <Grid container sx={{ marginLeft: '4rem' }} >
                    <Grid item xs={2.3} sx={{ margin: '1rem 1rem', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', padding: '0.3rem', borderRadius: '5px' }}>
                        <IconButton>
                            <AgricultureIcon sx={{ color: 'blue', backgroundColor: 'lightblue', padding: '7px', fontSize: '30px', borderRadius: '5px' }} />
                            <Button sx={{ color: 'black' }}>Engineering</Button>
                        </IconButton>
                    </Grid>
                    <Grid item xs={2.3} sx={{ margin: '1rem 1rem', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', padding: '0.3rem', borderRadius: '5px' }}>
                        <IconButton>
                            <TerminalIcon sx={{ color: 'green', backgroundColor: 'lightgreen', padding: '7px', fontSize: '30px', borderRadius: '5px' }} />
                            <Button sx={{ color: 'black' }}>Programming</Button>
                        </IconButton>
                    </Grid>
                    <Grid item xs={2.3} sx={{ margin: '1rem 1rem', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', padding: '0.3rem', borderRadius: '5px' }}>
                        <IconButton>
                            <TranslateIcon sx={{ color: 'purple', backgroundColor: 'violet', padding: '7px', fontSize: '30px', borderRadius: '5px' }} />
                            <Button sx={{ color: 'black' }}>Languages</Button>
                        </IconButton>
                    </Grid>
                    <Grid item xs={2.3} sx={{ margin: '1rem 1rem', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', padding: '0.3rem', borderRadius: '5px' }}>
                        <IconButton>
                            <ScienceOutlinedIcon sx={{ color: '#334a1b', backgroundColor: '#b2f071', padding: '7px', fontSize: '30px', borderRadius: '5px' }} />
                            <Button sx={{ color: 'black' }}>Science</Button>
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container sx={{ marginLeft: '4rem' }} >
                    <Grid item xs={2.3} sx={{ margin: '1rem 1rem', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', padding: '0.3rem', borderRadius: '5px' }}>
                        <IconButton>
                            <AutoStoriesOutlinedIcon sx={{ color: 'orange', backgroundColor: '#f5be8c', padding: '7px', fontSize: '30px', borderRadius: '5px' }} />
                            <Button sx={{ color: 'black' }}>History</Button>
                        </IconButton>
                    </Grid>
                    <Grid item xs={2.3} sx={{ margin: '1rem 1rem', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', padding: '0.3rem', borderRadius: '5px' }}>
                        <IconButton>
                            <PsychologyAltOutlinedIcon sx={{ color: '#52514d', backgroundColor: '#dbaaf0', padding: '7px', fontSize: '30px', borderRadius: '5px' }} />
                            <Button sx={{ color: 'black' }}>Psycology</Button>
                        </IconButton>
                    </Grid>
                    <Grid item xs={2.3} sx={{ margin: '1rem 1rem', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', padding: '0.3rem', borderRadius: '5px' }}>
                        <IconButton>
                            <DashboardOutlinedIcon sx={{ color: '#856f01', backgroundColor: '#f7da48', padding: '7px', fontSize: '30px', borderRadius: '5px' }} />
                            <Button sx={{ color: 'black' }}>Web Design</Button>
                        </IconButton>
                    </Grid>
                    <Grid item xs={2.3} sx={{ margin: '1rem 1rem', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', padding: '0.3rem', borderRadius: '5px' }}>
                        <IconButton>
                            <ArrowForwardIosOutlinedIcon sx={{ color: '#52514d', backgroundColor: '#b8b6b0', padding: '7px', fontSize: '30px', borderRadius: '5px' }} />
                            <Button sx={{ color: 'black' }}>See all</Button>
                        </IconButton>
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}

export default Subject
