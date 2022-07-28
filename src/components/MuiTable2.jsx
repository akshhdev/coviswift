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

export default function MuiTable2() {
  return (
    <>
    <Grid className="table-section">
    <Container>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={5} sx={{textAlign:'center'}} className="table-heading">Ordering Information</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {
                tableData.map(row => (
                    
                    <TableRow key={row.id}>
                        <TableCell className="table-heading">{row.id}</TableCell>
                        <TableCell>{row.size_1}</TableCell>
                        <TableCell>{row.size_2}</TableCell>
                        <TableCell>{row.size_3}</TableCell>
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
    id: 'Reaction Size Kit',
    size_1: "25",
    size_2: "50",
    size_3: "100",
  },
  {
    id: 'Catalogue No.',
    size_1: "CCSRP25",
    size_2: "CCSRP50",
    size_3: "CCSRP100",
  },
 
];
