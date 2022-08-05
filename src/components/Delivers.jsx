import React from "react";

import {
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Container } from "@mui/system";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function Delivers() {
  return (
    <>
      <Grid className="delivers-section section">
        <Container>
          <Grid container spacing={4} alignItems={"center"}>
            <Grid item lg={5} xs={12}>
              <Box>
                <img
                  src={require("../assets/images/coviswift-delivers.jpg")}
                  alt="Coviswift Delivers"
                />
              </Box>
            </Grid>

            <Grid item lg={7} xs={12}>
              <Box>
                <h3>
                  CoviSwift<sup>TM</sup> Delivers
                </h3>
                <Typography style={{ marginBottom: "20px" }}>
                  <span>Rapid plug and play PoC real time PCR test</span>
                </Typography>

                <Typography>
                  <List className="list-section">
                    <ListItem>
                      <KeyboardDoubleArrowRightIcon />
                      <ListItemText
                        className="list-text"
                        primary="First ever 4 gene detection in Rapid RTPCR - for High
                      sensitivity, High Specificity and accuracy"
                      />
                    </ListItem>

                    <ListItem>
                      <KeyboardDoubleArrowRightIcon />
                      <ListItemText
                        className="list-text"
                        primary="Inclusion of Housekeeping gene for stringent quality
                      control and elimination of false negatives"
                      />
                    </ListItem>

                    <ListItem>
                      <KeyboardDoubleArrowRightIcon />
                      <ListItemText
                        className="list-text"
                        primary="Rapid detection of S-Gene mutation as a proxy marker for
                      variants of concern before sequencing."
                      />
                    </ListItem>

                    <ListItem>
                      <KeyboardDoubleArrowRightIcon />
                      <ListItemText
                        className="list-text"
                        primary="CoviSwift™ Rapid RT-PCR is true RT-PCR unlike LAMP or other Rapid tests - thus no loss of sensitivity but with the convenience of Rapid protocol"
                      />
                    </ListItem>

                    <ListItem>
                      <KeyboardDoubleArrowRightIcon />
                      <ListItemText
                        className="list-text"
                        primary="High throughput (16 samples within 40 min)"
                      />
                    </ListItem>

                    <ListItem>
                      <KeyboardDoubleArrowRightIcon />
                      <ListItemText
                        className="list-text"
                        primary="Everything inclusing from swab to results - Pipette free handling"
                      />
                    </ListItem>

                    <ListItem>
                      <KeyboardDoubleArrowRightIcon />
                      <ListItemText
                        className="list-text"
                        primary="Plug and play instrument can be installed anywere with super ease"
                      />
                    </ListItem>

                    <ListItem>
                      <KeyboardDoubleArrowRightIcon />
                      <ListItemText
                        className="list-text"
                        primary="Expert free operation - Just a nasal swab and drop addition for quick and accurate reports"
                      />
                    </ListItem>

                    <ListItem>
                      <KeyboardDoubleArrowRightIcon />
                      <ListItemText
                        className="list-text"
                        primary="Enabled with MylabCares auto reporting software eliminating the need of experts for analysis and interpretation"
                      />
                    </ListItem>

                    <ListItem>
                      <KeyboardDoubleArrowRightIcon />
                      <ListItemText
                        className="list-text"
                        primary="24 Month Shelf Life"
                      />
                    </ListItem>
                  </List>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}

export default Delivers;
