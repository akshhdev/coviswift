import React from "react";

import { Grid, Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

function Features() {
  useEffect(()=> {
    Aos.init();
  },  []);

  return (
    <>
      <Grid className="features-section section">
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={12} xs={12} spacing={3}>
              <Box>
                <h3 style={{ textAlign: "center" }}>Key Features</h3>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item lg={4} xs={12} spacing={3}>
              <Box
                className="feature-box-row-1"
                style={{
                  backgroundImage: "url('/img/Swift-Assay.jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <h4>Swift Assay</h4>
                <Typography className="feature-box-content">
                  <p>Sample collection to results within 40 Mins</p>
                </Typography>
              </Box>
            </Grid>

            <Grid item lg={4} xs={12} spacing={3}>
              <Box
                className="feature-box-row-1"
                style={{
                  backgroundImage: "url('/img/Multi-Gene-Detection.jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="700"
              >
                <h4>Multi-Gene Detection</h4>
                <Typography className="feature-box-content">
                  <p>
                    CoviSwift™ COVID-19 S plus Rapid PCR kit gives the
                    additional benefit of S gene detection.
                  </p>
                </Typography>
              </Box>
            </Grid>

            <Grid item lg={4} xs={12} spacing={3}>
              <Box
                className="feature-box-row-1"
                style={{
                  backgroundImage: "url('/img/Gold-Standard-Accuracy.jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-duration="900"
              >
                <h4>Gold Standard Accuracy</h4>
                <Typography className="feature-box-content">
                  <p>
                    CoviSwift™ is highly sensitive and specific for COVID-19
                    detection. (Gold standard RT PCR method)
                  </p>
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={3} style={{ marginTop: "0px" }}>
            <Grid item lg={4} xs={12} spacing={3}>
              <Box
                className="feature-box-row-2"
                style={{
                  backgroundImage: "url('/img/Easy-Efficient-Transportation.jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <h4>Easy & Efficient Transportation</h4>
                <Typography className="feature-box-content">
                  <ul>
                    <li>CoviSwift™ is intelligently designed for single use format eliminating inventory management</li>
                    <li>Eliminating the need of cold storage and shipment at room temperature thus enabling the need for cold storage and cold shipment.</li>
                  </ul>
                </Typography>
              </Box>
            </Grid>

            <Grid item lg={4} xs={12} spacing={3}>
              <Box
                className="feature-box-row-2"
                style={{
                  backgroundImage: "url('/img/Zero-Contamination.jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="700"
              >
                <h4>Zero Contamination</h4>
                <Typography className="feature-box-content">
                  <p>
                  CoviSwift’s brilliantly designed assay enables quick easy and efficient operation eliminating contamination concerns.
                  </p>
                </Typography>
              </Box>
            </Grid>

            <Grid item lg={4} xs={12} spacing={3}>
              <Box
                className="feature-box-row-2"
                style={{
                  backgroundImage: "url('/img/Pipette-Free-Operation.jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-duration="900"
              >
                <h4>Pipette Free Operation</h4>
                <Typography className="feature-box-content">
                  <p>
                  CoviSwift™ completely eliminates the need of pipette and technical experts as well as requirement of pipette and liquid handling
                  </p>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}

export default Features;
