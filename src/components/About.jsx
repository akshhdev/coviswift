import React from "react";

import { Grid, Box, Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function About() {
  return (
    <>
      <Grid className="about-section section">
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={12} xs={12} spacing={3}>
              <Box>
                <h3 style={{ textAlign: "center" }}>
                  About CoviSwift<sup>TM</sup>
                </h3>
              </Box>
              <Typography style={{ textAlign: "center" }}>
                <p>
                  CoviSwift™ is the world’s first point of care high throughput
                  solution for Covid-19, that can be used at small labs,
                  in-hospital labs, airports, villages allowing gold standard
                  high throughput testing anywhere. The solution comprises the
                  CoviSwift™ assay and Compact-Q machines which process 16
                  samples within 40 minutes, which is approximately 4 times
                  faster than the traditional method of RT-PCR testing while
                  maintaining the gold standard accuracy.
                </p>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}
