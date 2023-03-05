import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react"
import theme from '../theme';
import {  ThemeProvider } from '@mui/material/styles';





export default function Navbar() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };  

    if (isSmallScreen) {
        return(
        <div>
            <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
             <AppBar sx={{height:"70px", display:"flex",alignItems:"flex-start", justifyContent:"space-between",justifyItems:"center"}} position="static">
             <Toolbar sx={{display:"flex", justifyContent:"space-between",height:"70px"}}>
                <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ m: 2 }}
            onClick={handleClick}
          >
           <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                 keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
</div>
)}
    else {
        return (
          <div>
          <ThemeProvider theme={theme}>
            <Box sx={{ width: '100%', maxWidth: 100, bgcolor: '',border:"solid",borderRadius:"20px", position:"fixed", top:10,bottom:10,left:10 }}>
            <List sx={{ bgcolor: 'white' }} disablePadding>
            <ListItemButton
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin:"2em auto",
    bgcolor: "white",
    width: "5em",
    height: "5em",
    borderRadius: "50%",
    ':hover': { bgcolor: 'purple' }
  }}
>
  <ListItemIcon
    sx={{
      color: 'black',
      width: '2.5em',
      height: '2.5em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ':hover': { color: 'white' }
    }}
  >
    <InboxIcon />
  </ListItemIcon>
</ListItemButton>

  <ListItemButton sx={{ ':hover': { bgcolor: 'purple' } }}>
    <ListItemIcon sx={{ color: 'black', ':hover': { color: 'white' } }}>
      <InboxIcon />
    </ListItemIcon>
  </ListItemButton>
</List>
              
            </Box>
            </ThemeProvider>
            </div>
          );
}}
