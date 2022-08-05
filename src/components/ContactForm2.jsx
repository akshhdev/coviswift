import React, { Component} from 'react';

import axios from "axios";

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

class ContactForm2 extends Component {
  state = {
    name: "",
    email: "",
    number: "",
    message: "",
    sent: false,
  };

  // handle inputs
  handleName = (e) => {
    this.setState({
      name: e.target.name
    });
  };

  handleEmail = (e) => {
    this.setState({
      name: e.target.email
    });
  };

  handleNumber = (e) => {
    this.setState({
      name: e.target.number
    });
  };

  handleMessage = (e) => {
    this.setState({
      name: e.target.message
    });
  };

  // end of handle inputs

  formSubmit=(e)=>{
    e.preventDefault();

    let data = {
      name:this.state.name,
      email:this.state.email,
      number:this.state.number,
      message:this.state.message
    }

    axios.post('/api/forma',data)
    .then(res=>{
      this.setState({
        sent:true,
      },this.resetForm())
    }).catch(()=>{
      console.log('message not sent');
    })
  }


// for reseting initial data
resetForm=()=>{
  this.setState({
    name:'',
    email:'',
    number:'',
    message:''
  })

  setTimeout(()=>{
    this.setState({
      sent:false,
    })
  },3000)
}


render(){
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
              <form onSubmit={this.formSubmit}>
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
                        value={this.state.name}
                        onChange={this.handleName}
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
                        value={this.state.email}
                        onChange={this.handleEmail}
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
                        value={this.state.number}
                        onChange={this.handleNumber}
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
                        value={this.state.message}
                        onChange={this.handleMessage}
                        multiline
                        rows={4}
                        fullWidth
                      />
                    </Box>
                  </Grid>

                  <Grid item lg={12} xs={12}>
                    <Box style={{ margin: "10px" }}>
                      <Button type="submit" href="/" className="btn">
                        Submit
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

}

export default ContactForm2;
