import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Viewstudent = () => {
  return (
    <div>
       <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{color:'red',fontFamily:'sans-serif',fontSize:'30px'}}>Name</TableCell>
                    <TableCell style={{color:'red',fontFamily:'sans-serif',fontSize:'30px'}}>Age</TableCell>
                    <TableCell style={{color:'red',fontFamily:'sans-serif',fontSize:'30px'}}>Department</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
               
            </TableBody>
        </Table>
        
        
        
        </TableContainer> 
    </div>
  )
}

export default Viewstudent