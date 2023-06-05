import React,{useState} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import FilterBAndWOutlinedIcon from '@mui/icons-material/FilterBAndWOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ButtonBase from '@mui/material/ButtonBase';
import { Button } from '@mui/material';
export default function Menu(props) {
    const [active,setActive] = useState('Inbox');
    const {onClickCompose} = props;
     const ListData = [
        {
            'id':1,
            'title': "Inbox",
            'icon' :  <FilterBAndWOutlinedIcon sx={{ height: 20, width: 20 }}/>
        },
        {
            'id':2,
            'title': "Starred",
            'icon' :  <StarOutlineOutlinedIcon sx={{ height: 20, width: 20 }}/>
        },
        {
            'id':3,
            'title': "Snooze",
            'icon' :  <AccessTimeOutlinedIcon sx={{ height: 20, width: 20 }}/>
        },
        {
            'id':4,
            'title': "Sent",
            'icon' :  <SendOutlinedIcon sx={{ height: 20, width: 20 }}/>
        },
        {
            'id':5,
            'title': "Drafts",
            'icon' :  <SummarizeOutlinedIcon sx={{ height: 20, width: 20 }}/>
        },
        {
            'id':6,
            'title': "More",
            'icon' :  <KeyboardArrowDownOutlinedIcon sx={{ height: 20, width: 20 }}/>
        },
     ]

    return (
        <Box sx={{ backgroundColor: '#fcf8f7', height: '100vh' }}>
            <Box m={"10px 0 10px 20px"} display="flex" width={'50%'} alignItems={'center'} justifyContent="space-between">
                <MenuOutlinedIcon sx={{ height: 30, width: 30 }} />
                <MailOutlinedIcon sx={{ height: 35, width: 35, color: 'red' }} />
                <Typography sx={{ fontSize: 20 }}>Gmail</Typography>
            </Box>
            <Button onClick={()=> onClickCompose()} variant='contained'
                sx={{
                    backgroundColor: 'lightblue',
                    borderRadius: 3,
                    cursor: 'pointer',
                    color: '#000',
                    ":hover": {
                        bgcolor: "lightblue",
                        color: "#000"
                    },
                    paddingX: 3,
                    paddingY: 2,
                    justifyContent: 'space-between',
                    margin: '10px 0px 10px 10px',
                    textTransform: 'none',
                    boxShadow: 'none'
                }}>
                <ModeEditOutlinedIcon sx={{ height: 23, width: 23 }} />
                <Typography ml={1} sx={{ fontSize: 15 }}>Compose</Typography>
            </Button>

            <Box mt={1}>
                {
                    ListData.map((item,ind)=> {
                        return(
                             <ButtonBase disableRipple disableTouchRipple onClick={()=> setActive(item.title)} 
                             sx={{display:'flex',
                             backgroundColor: active == item.title ? '#b6d2d9' : null,
                             width:'90%',
                             justifyContent:'flex-start',
                             paddingLeft:2,
                             paddingY:0.5,
                             borderRadius:3,
                             boxShadow:'none',
                             marginTop:0.5,
                             ':hover':{
                                bgcolor: active == item.title ? '#b6d2d9' : 'lightgray',
                             }
                             }}>
                              {item.icon}
                            <Typography ml={1} sx={{ fontSize: 15,marginLeft:'15px',fontWeight: active == item.title ? 'bold' : null }}>{item.title}</Typography>
                             </ButtonBase>
                        )
                    })
                }
            </Box>
        </Box>
    )
}
