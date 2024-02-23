import { Table,TableHead, TableBody, TableCell, TableContainer, TableRow, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Addstudent from './Addstudent';

const Viewstudent = () => {
  const [student, setstudent] = useState([]);
  const [selected,setselected] = useState([]);
  const [edit,setedit] = useState(false)


  const editdata=(id)=>{
    axios
    .get("http://localhost:4000/students/" + id)
    .then((response) => {
      setselected(response.data);
      setedit(true);
    }).catch(()=>{
      alert("Cannot edit data");
    })

  }


  const deletedata=(id)=>{
    axios
    .delete("http://localhost:4000/students/" + id)
    .then(() => {
      alert("Deleted a row");
      window.location.reload();
    }).catch(err =>{
      alert("Could not delete the data")
    })

  }


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
      {edit ? (<Addstudent method='Put' data={{id:selected._id, name:selected.name, age:selected.age, department:selected.department}} />):(

      
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
                  <TableCell><Button variant='contained' onClick={()=>{editdata(val._id);}}>Edit</Button></TableCell>
                  <TableCell><Button variant='contained' color='error' onClick={()=>{deletedata(val._id);}}>Delete</Button></TableCell>

                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      )}
    </div>
  );
};

export default Viewstudent;