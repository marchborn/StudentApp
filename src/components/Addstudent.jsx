import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Addstudent = () => {
    var[data,setdata] = useState({})
    var[fname,setfname] = useState('');

    const inputHandler = (e) => {
        
        setdata({...data,[e.target.name]: e.target.value})
        console.log(data)

    }
    const submitHandler = ()=>{
        
        setfname(data);
        console.log(fname)
        axios.post("http://localhost:4000/students",{
          name:fname.name,
          age:fname.age,
          department:fname.department
        })
        .then(()=>{
          alert("New entry created successfully")
        })
        .catch(()=>{
          alert("Error saving data")
        })
    }
    useEffect(() => {
      console.log(fname)
  }, [fname])

  return (
    <div>
        <br /><br />
        <Typography style={{fontSize:'30px'}}>Student Details</Typography><br /><br />
        <TextField label='Name' variant='outlined' name='name' onChange={inputHandler}></TextField><br /><br />
        <TextField label='Age' variant='outlined' name='age' onChange={inputHandler}></TextField><br /><br />
        <TextField label='Department' variant='outlined' name='department' onChange={inputHandler}></TextField><br /><br />
        <Button variant='contained' color='success' onClick={submitHandler}>Submit</Button>

    </div>
  )
}

export default Addstudent