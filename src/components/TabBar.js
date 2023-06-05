import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import FilterBAndWOutlinedIcon from '@mui/icons-material/FilterBAndWOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
export default function TabBar() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event , newValue) => {
        setValue(newValue);
      };
      
  return (
    <Tabs sx={{padding:1}} TabIndicatorProps={{
        style: { height:3, width:'24%'},
      }} value={value} onChange={handleChange} aria-label="icon tabs example">
      <Tab sx={{marginRight:10,textTransform: 'none'}} icon={<FilterBAndWOutlinedIcon />} label="Primary" aria-label="phone" iconPosition='start'/>
      <Tab sx={{marginRight:10,textTransform: 'none'}} icon={<SellOutlinedIcon />} label="Promotions" aria-label="favorite" iconPosition='start'/>
      <Tab sx={{textTransform: 'none'}} icon={<SupervisorAccountOutlinedIcon />} label="Social" aria-label="person" iconPosition='start'/>
    </Tabs>
  )
}
