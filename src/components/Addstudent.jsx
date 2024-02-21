import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

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
    }

  return (
    <div>
        <br /><br />
        <TextField label='Name' variant='outlined' name='name' onChange={inputHandler}></TextField><br /><br />
        <TextField label='Age' variant='outlined' name='age' onChange={inputHandler}></TextField><br /><br />
        <TextField label='Department' variant='outlined' name='department' onChange={inputHandler}></TextField><br /><br />
        <Button variant='contained' color='success' onClick={submitHandler}>Submit</Button>

    </div>
  )
}

export default Addstudent