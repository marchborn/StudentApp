import { AppBar, Button, Toolbar, Typography} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography sx={{flexGrow:1}} align='left' variant='h6'>APP</Typography>
                <Button>
                <Link to='/' style={{color:'white'}}>Add Student</Link></Button>
                <Button>
                <Link to='/view' style={{color:'white'}}>View Student</Link></Button>
                </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar