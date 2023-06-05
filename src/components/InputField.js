import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

const InputField =()=> {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '70%',boxShadow:'none',backgroundColor:'#b6d2d9', borderRadius:5 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <SearchOutlinedIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1,color:'#000'}}
        placeholder="Search mail"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <TuneOutlinedIcon />
      </IconButton>
    </Paper>
  )
}

export default InputField;
