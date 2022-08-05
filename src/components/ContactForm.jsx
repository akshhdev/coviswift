import React, { useState } from "react";

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



const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, number, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      number: number.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3001", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
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
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/img/contact-image.jpg"
                  })`,
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
              <form onSubmit={handleSubmit}>
                <Grid container spacing={0}>
                  <Grid item lg={12} xs={12}>
                    <Box style={{ margin: "10px" }}>
                      <TextField
                        label="Name"
                        placeholder="Name"
                        variant="outlined"
                        fullWidth
                        name="name"
                        id="name"
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
                        id="email"
                        name="email"
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
                        id="number"
                        name="number"
                        fullWidth
                      />
                    </Box>
                  </Grid>

                  <Grid item lg={12} xs={12}>
                    <Box style={{ margin: "10px" }}>
                      <TextField
                        label="Message"
                        placeholder="Message"
                        variant="outlined"
                        id="message"
                        name="message"
                        multiline
                        rows={4}
                        fullWidth
                      />
                    </Box>
                  </Grid>

                  <Grid item lg={12} xs={12}>
                    <Box style={{ margin: "10px" }}>
                      <Button type="submit" href="/" className="btn">
                      {status}
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default ContactForm;
