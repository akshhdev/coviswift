import { Grid, Box, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CoviswiftLogo from "../assets/images/CoviSwift2.svg";

function Banner() {
  return (
    <>
      
        <Grid className="banner-section section">
          <Container>
            <Grid container spacing={2}>
              <Grid item lg={6} xs={12} spacing={3}>
                <Box>
                  <img src={CoviswiftLogo} alt="Coviswift Logo" width="200px"/>
                  <Typography className="banner-text">
                    <h1 style={{ marginBottom: "0px", fontWeight:"700" }}>World’s First</h1>
                    <h1>
                      High Throughput Point Of Care Testing Solution For
                      Covid-19
                    </h1>
                  </Typography>
                  <Button href="/" className="btn">Book A Demo</Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Grid>
     
    </>
  );
}

export default Banner;
