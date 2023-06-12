import React, { useState } from 'react'
import {AppBar, Toolbar, Typography,Tab,Tabs} from '@mui/material';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import {NavLink} from 'react-router-dom'
const Header = () => {
    const [value,setValue]=useState();
  return (
    <div>
      <AppBar sx={{backgroundColor:"#132F4E"}} position='sticky'>
      <Toolbar>
      <Typography> <AccessibilityNewIcon/></Typography>
      <Tabs sx={{ml:'auto'}} textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=>setValue(val)}>
           <Tab LinkComponent={NavLink} to='/add' label='Add Tournament'/>
           <Tab LinkComponent={NavLink} to='/updateTournaments/:id' label=' Update'/>
           <Tab LinkComponent={NavLink} to='/tournaments' label=' Tournaments'/>
           
           <Tab LinkComponent={NavLink} to='/about' label='About Us'/>
      </Tabs>
      </Toolbar>
        
      </AppBar>
    </div>
  )
}

export default Header
