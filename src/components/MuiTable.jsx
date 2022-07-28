import React from "react";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Grid,
  Container
} from "@mui/material";

export default function MuiTable() {
  return (
    <>
    <Grid className="table-section section">
    <Container>
      <TableContainer component={Paper} sx={{maxHeight:'200px'}}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Gender</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {
                tableData.map(row => (
                    <TableRow key={row.id} sx={{'&:last-child td, &:last-child th': {border:0}}}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.first_name}</TableCell>
                        <TableCell>{row.last_name}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.gender}</TableCell>
                    </TableRow>
                ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
      </Grid>
    </>
  );
}

const tableData = [
  {
    id: 1,
    first_name: "Sofia",
    last_name: "Hensmans",
    email: "shensmans0@netvibes.com",
    gender: "Female",
    ip_address: "23.252.98.139",
  },
  {
    id: 2,
    first_name: "Burr",
    last_name: "Conybear",
    email: "bconybear1@wikia.com",
    gender: "Genderfluid",
    ip_address: "172.19.5.49",
  },
  {
    id: 3,
    first_name: "Jerome",
    last_name: "Brennan",
    email: "jbrennan2@who.int",
    gender: "Male",
    ip_address: "61.210.231.55",
  },
  {
    id: 4,
    first_name: "Meir",
    last_name: "Slater",
    email: "mslater3@plala.or.jp",
    gender: "Male",
    ip_address: "198.239.200.174",
  },
  {
    id: 5,
    first_name: "Elianora",
    last_name: "Heavyside",
    email: "eheavyside4@yale.edu",
    gender: "Female",
    ip_address: "62.6.94.213",
  },
];
