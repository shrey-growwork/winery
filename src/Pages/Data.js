import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, CardContent, Grid, TextField, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const url = "https://api.sampleapis.com/wines/reds"
function Data() {


    const [tempdata, setTempdata] = useState([])

    const [manipulator, setManipulator] = useState(0)
    let navigate = useNavigate();

    const routeChange = (e) => {
        localStorage.setItem("data", JSON.stringify(e))
        let path = `/details`;
        navigate(path);
    }

    const [post1, setpost1] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(response => {
                // tempdata(response.data)
                setpost1(response.data)
                console.log(response.data, "response")
            })
            .catch(error => {
                console.log(error, "Error")
            })
    }, [])

    if (post1.length !== 0 && manipulator === 0) {
        setTempdata(post1)
        setManipulator(manipulator + 1)
    }

    const onChangeHandler = (query) => {
        console.log("q", query)

        if (query.length > 0) {
            var extra = []
            post1.filter((item) => {
                if (
                    item.winery.toLowerCase().includes(query.toLowerCase()) === true ||
                    item.wine.toLowerCase().includes(query.toLowerCase()) === true

                ) {
                    extra.push(item)
                }
            })
            setTempdata(extra)
        } else {
            setTempdata(post1)
        }
    }

    return (
        <div style={{ marginTop: "15px" }}>
            <Box sx={{ flexGrow: 4, backgroundColor: 'background.default', height: "100vh" }}  >
                <Grid
                    sx={{ flexGrow: 1, paddingTop: '0' }}
                    container
                    spacing={3}
                    justifyContent="center"
                >
                    <Grid item xs={12} sm={12} md={12}>
                        {' '}
                        <TextField
                            id="filled-basic"
                            sx={{ width: '450px' }}
                            label="Search Username or Id..."
                            variant="filled"
                            onChange={(e) => onChangeHandler(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    {tempdata.length > 0 ? tempdata.map((ele) => (
                        <>
                            <Grid item xs={12} sm={6} md={4} lg={3} >
                                <Paper sx={{ display: "flex", margin: "15px", boxSizing: "content-box" }} variant="outlined" >

                                    <CardContent style={{ margin: "2px 5px" }}>
                                        <Typography sx={{ mb: 1.5 }} >
                                            <img style={{ width: "200px", height: "200px" }} src={ele.image} alt="" >
                                            </img>
                                        </Typography>

                                        <Typography sx={{ mb: 1.5 }} >
                                            Winery Name: {ele.winery}
                                        </Typography>

                                        <Typography sx={{ mb: 1.5 }}>
                                            Wine Name: {ele.wine}
                                        </Typography>

                                        <Typography sx={{ mb: 1.5 }}>
                                            Reviews: {ele.rating.reviews}
                                            <br />
                                        </Typography>

                                        <Typography sx={{ mb: 1.5 }}>
                                            Location: {ele.location}
                                            <br />
                                        </Typography>
                                        <div>
                                            <Button onClick={() => routeChange(ele)}>
                                                More Info..
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Paper>
                            </Grid>
                        </>
                    )) : <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={false}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                    }
                </Grid>
            </Box>
        </div >
    );

}

export default Data

