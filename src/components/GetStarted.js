import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { ButtonBase } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import StayPrimaryPortraitOutlinedIcon from '@mui/icons-material/StayPrimaryPortraitOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
export default function GetStarted() {
  return (
    <Box
    sx={{
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '16px',
        margin:'15px'
    }}
>
    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
    <Typography fontWeight={'bold'}>Get started with Gmail</Typography>
    <CloseSharpIcon/>
    </Box>
    <Box display='flex' width={'90%'} mt={2} mb={2} justifyContent={'space-between'}>
     <Box display={'flex'} alignItems={'center'} >
        <ButtonBase sx={{width:50,height:50,borderRadius:50,backgroundColor:'#b6d2d9'}}>
           <SettingsIcon/>
        </ButtonBase>
        <Typography fontSize={14} sx={{marginLeft:'15px',width:'100px'}}>Customize your inbox</Typography>
     </Box>

     <Box display={'flex'} alignItems={'center'}>
        <ButtonBase sx={{width:50,height:50,borderRadius:50,backgroundColor:'lightgreen'}}>
           <AccountCircleOutlinedIcon/>
        </ButtonBase>
        <Typography fontSize={14} sx={{marginLeft:'15px',width:'100px'}}>Customize your inbox</Typography>
     </Box>

     <Box display={'flex'} alignItems={'center'}>
        <ButtonBase sx={{width:50,height:50,borderRadius:50,backgroundColor:'lightpink'}}>
           <StayPrimaryPortraitOutlinedIcon/>
        </ButtonBase>
        <Typography fontSize={14} sx={{marginLeft:'15px',width:'100px'}}>Get gmail for mobile</Typography>
     </Box>
    </Box>
</Box>
  )
}
