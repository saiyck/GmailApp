import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { Divider } from '@mui/material';
export default function GmailCard() {
  return (
    <>
   <Box display={'flex'} alignItems={'center'} width={'100%'}>
      <Checkbox size='small' />
      <StarBorderOutlinedIcon sx={{width:20,height:20}}/>
      <Typography fontSize={14} ml={1}>LinkedIn News India via LinkedIn</Typography>
      <Typography fontSize={14} ml={2}>Decoding green deposits, the future of AI in insurance, and more</Typography>
      <Typography fontSize={12} textAlign={'end'} ml={3}>1:49PM</Typography>
   </Box>
   <Divider/>
   </>
  )
}
