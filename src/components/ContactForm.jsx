import React from "react";

import {
  Grid,
  Box,
  Container,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import DownloadingIcon from "@mui/icons-material/Downloading";

export default function ContactForm() {
  return (
    <>
      <Grid className="form-section section">
        <Container>
          <Grid container spacing={3} alignItems={"center"}>
            <Grid item lg={6} xs={12}>
              {/* <Box>
                <img
                  src="/img/contact-image.jpg"
                  alt="Coviswift Delivers"
                  style={{ borderRadius: "50px" }}
                />
              </Box>
              <Box textAlign={"center"}>
                <a href="/" class="buttonDownload">
                  Download
                </a>
              </Box> */}
              <Box
                className="contact-img-box"
                style={{
                  backgroundImage: "url('/img/contact-image.jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Typography>
                 
                  <List className="contact-img-text">
                  <a href="/img/coviswift-brochure.pdf" download>
                    <ListItem>
                    <DownloadingIcon />
                      <ListItemText
                        className="list-text"
                        primary="Download Brochure"
                      />
                    </ListItem>
                    </a>
                  </List>
                  
                </Typography>
              </Box>
            </Grid>

            <Grid item lg={6} xs={12}>
              <Box style={{ marginLeft: "10px" }}>
                <h3>Get In Touch</h3>
              </Box>

              <Grid container spacing={0}>
                
                <Grid item lg={12} xs={12}>
                  <Box style={{ margin: "10px" }}>
                    <TextField
                      label="Name"
                      placeholder="Name"
                      variant="outlined"
                      fullWidth
                      name="name"
                    />
                  </Box>
                </Grid>

                <Grid item lg={12} xs={12}>
                  <Box style={{ margin: "10px" }}>
                    <TextField
                      type="email"
                      label="Email"
                      placeholder="Email"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                </Grid>

                <Grid item lg={12} xs={12}>
                  <Box style={{ margin: "10px" }}>
                    <TextField
                      type="tel"
                      label="Number"
                      placeholder="Number"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                </Grid>

                {/* <Grid item lg={6} xs={12}>
                  <Box style={{margin:'10px'}}>
                    <TextField
                      type="subject"
                      label="Subject"
                      placeholder="Subject"
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                </Grid> */}

                <Grid item lg={12} xs={12}>
                  <Box style={{ margin: "10px" }}>
                    <TextField
                      label="Message"
                      placeholder="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      fullWidth
                    />
                  </Box>
                </Grid>

                <Grid item lg={12} xs={12}>
                  <Box style={{ margin: "10px" }}>
                    <Button href="/" className="btn">
                      Submit
                    </Button>
                  </Box>
                </Grid>
               
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}
