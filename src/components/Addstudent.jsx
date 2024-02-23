import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Addstudent = (props) => {
    var[data,setdata] = useState({
      id: props.data.id,
      name:props.data.name,
      age:props.data.age,
      department:props.data.department
    });

    const inputHandler = (e) => {
        setdata({...data,[e.target.name]: e.target.value})
        console.log(data)

    }
    const submitHandler = ()=>{
        axios.post("http://localhost:4000/students",{
          name:data.name,
          age:data.age,
          department:data.department
        })
        .then(()=>{
          alert("New entry created successfully")
        })
        .catch(()=>{
          alert("Error saving data")
        })
    }

  return (
    <div>
        <br /><br />
        <Typography style={{fontSize:'30px'}}>Student Details</Typography><br /><br />
        <TextField label='Name' variant='outlined' name='name' value={data.name} onChange={inputHandler}></TextField><br /><br />
        <TextField label='Age' variant='outlined' name='age' value={data.age} onChange={inputHandler}></TextField><br /><br />
        <TextField label='Department' variant='outlined' name='department' value={data.department} onChange={inputHandler}></TextField><br /><br />
        <Button variant='contained' color='success' onClick={submitHandler}>Submit</Button>

    </div>
  )
}

export default Addstudent