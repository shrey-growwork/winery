import React, { useEffect, useState } from 'react'
import { Backdrop, CardContent, CircularProgress, Grid, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function Details() {

    const [post1, setpost1] = useState({})
    useEffect(() => {
        setpost1(JSON.parse(localStorage.getItem("data")))
        // console.log("first", data)
    }, [])
    return (
        <div>
            <Box sx={{ flexGrow: 4 }} >
                <Grid>
                    {post1 ? (
                        <>
                            <Grid item xs={12} sm={6} md={4} lg={3} >
                                <Paper style={{ display: "flex", margin: "100px 750px", boxSizing: "content-box" }} elevation={7} >

                                    <CardContent style={{ margin: "2px 5px" }}>
                                        <Typography sx={{ mb: 1.5 }} >
                                            <img style={{ width: "200px", height: "200px" }} src={post1.image} alt="" >
                                            </img>
                                        </Typography>

                                        <Typography sx={{ mb: 1.5 }} >
                                            Winery Name: {post1.winery}
                                        </Typography>

                                        <Typography sx={{ mb: 1.5 }}>
                                            Wine Name: {post1.wine}
                                        </Typography>

                                        <Typography sx={{ mb: 1.5 }}>
                                            Reviews: {post1.rating?.reviews}
                                            <br />
                                        </Typography>

                                        <Typography sx={{ mb: 1.5 }}>
                                            Location: {post1.location}
                                            <br />
                                        </Typography>

                                    </CardContent>
                                </Paper>
                            </Grid>
                        </>
                    ) : <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={true}

                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                    }
                </Grid>
            </Box>
        </div >
    )
}

export default Details
