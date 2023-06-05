import React from 'react'
import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase';
import { Divider, Typography } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
export default function SideBar() {
  return (
   <Box alignItems={'center'} display={'flex'} flexDirection={'column'} width={'100%'}>
      <ButtonBase sx={{
        backgroundColor:'green',
        marginTop:2,
        width:34,
        height:34,
        borderRadius:34
      }}>
         <Typography  sx={{color:'#fff'}}>S</Typography>
      </ButtonBase>
      <Box mt={2} display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <img style={{marginTop:'25px'}} src={require('../assets/images/Calender.png')} alt="Logo" width={40} height={30}/>
      <img style={{marginTop:'25px'}} src={require('../assets/images/Keep.png')} alt="Logo" width={25} height={25}/>
      <img style={{marginTop:'25px'}} src={require('../assets/images/Task.png')} alt="Logo" width={20} height={20}/>
      <img style={{marginTop:'25px'}} src={require('../assets/images/Contact.png')} alt="Logo" width={20} height={20}/>
      </Box>
     <Divider sx={{width:0.2,marginTop:'25px'}}/>
     <AddOutlinedIcon sx={{marginTop:5}}/>
   </Box>
  )
}
