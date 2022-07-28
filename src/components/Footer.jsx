import React from "react";

import {
    Grid,
    Box,
    Container,
    Typography,
  } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Grid className="footer-section">
        <Container>
          <Grid container spacing={3} sx={{padding:'40px 0px'}}>
            <Grid item lg={12} xs={12}>
                <Box>
                <h6 className="footer-heading">Please Read IP Infringement Disclaimer Before Any Unauthorised Use.</h6>
                <Typography className="footer-disclaimer-text">
                <strong>Disclaimer :-</strong> CoviSwift™ Kit contents, process methodology, software application and algorithms, reagents and associated literature are Intellectual Property (IP) of Mylab Discovery Solutions Pvt. Ltd. (Mylab). Multiple aspects of CoviSwift™ as above are registered under Mylab IP Patent Application’s, Industrial Designs & Trademarks. Any attempt for infringement of above mentioned IP vested in CoviSwift™ for any purpose whatsoever, without taking prior written license from Mylab would amount to infringement and may be harmful involving high risk to life and may result in fatal injury. Mylab hereby disclaims any responsibility or liability of whatsoever nature arising out of any infringement or any kind of unauthorised use of CoviSwift™ or its IP. For enquiries related to IP licensing, and OEM manufacturing please write to legal@mylabglobal.com
                </Typography>
 
                  <p style={{marginTop:'20px'}}>  
                   Toll Free Number : <strong>1800-210-2680</strong>
                  </p>
                </Box>
            </Grid>
          </Grid>

          <Grid container  className="footer-bottom">
            <Grid item lg={12} xs={12} textAlign={"center"}>
                <Box>
                  <p>  
                  © 2022 <a href="https://mylabglobal.com/" target="_blank" rel="noreferrer">Mylab Discovery Solutions Pvt. Ltd..</a> All Rights Reserved.
                  </p>
                </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}
