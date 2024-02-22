import { Table,TableHead, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Viewstudent = () => {
  const [student, setstudent] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/students')
      .then((response) => {
        console.log(response);
        setstudent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: 'red', fontFamily: 'sans-serif', fontSize: '30px' }}>Name</TableCell>
              <TableCell style={{ color: 'red', fontFamily: 'sans-serif', fontSize: '30px' }}>Age</TableCell>
              <TableCell style={{ color: 'red', fontFamily: 'sans-serif', fontSize: '30px' }}>Department</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {student.map((val, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{val.name}</TableCell>
                  <TableCell>{val.age}</TableCell>
                  <TableCell>{val.department}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Viewstudent;