import React from 'react'
import Box from '@mui/material/Box'
import InputField from '../components/InputField'
import Typography from '@mui/material/Typography'
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import Checkbox from '@mui/material/Checkbox';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import TabBar from '../components/TabBar';
import GetStarted from '../components/GetStarted';
import { Divider } from '@mui/material';
import GmailCard from '../components/GmailCard';
export default function Main() {
    return (
        <Box>
            <Box display={'flex'} mt={1} justifyContent={'space-between'} alignItems={'center'}>
                <InputField />
                <Box display={'flex'} width={'15%'} justifyContent={'space-between'} alignItems={'center'}>
                    <ContactSupportOutlinedIcon />
                    <SettingsOutlinedIcon />
                    <AppsOutlinedIcon />
                </Box>
            </Box>
            <Box pb={1} sx={{ backgroundColor: '#fff',borderTopLeftRadius: 10, borderTopRightRadius: 10 }} mt={2}>
                <Box p={1} display='flex' alignItems='center' justifyContent='space-between'>
                    <Box display={'flex'} alignItems={'center'}>
                        <Checkbox size='small' />
                        <ArrowDropDownOutlinedIcon sx={{ marginLeft: -1 }} />
                        <RefreshOutlinedIcon sx={{ width: 20, height: 20, marginLeft: 2 }} />
                        <MoreVertOutlinedIcon sx={{ width: 20, height: 20, marginLeft: 2 }} />
                    </Box>
                    <Box display={'flex'}>
                        <Typography fontSize={15} color={'gray'}>1-50 of 103</Typography>
                        <Box sx={{ marginLeft: 2 }}>
                            <ChevronLeftOutlinedIcon sx={{ color: 'gray' }} />
                            <ChevronRightOutlinedIcon />
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <TabBar />
                    <Divider sx={{ marginTop: -1 }} />
                </Box>
                <GetStarted />
                <Box m={2}>
                    <GmailCard/>
                    <GmailCard/>
                    <GmailCard/>
                    <GmailCard/>
                    <GmailCard/>
                    <GmailCard/>
                    <GmailCard/>
                    <GmailCard/>
                </Box>
            </Box>
        </Box>
    )
}
