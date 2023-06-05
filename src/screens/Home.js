import React from 'react'
import { Grid, CssBaseline, TextField, Typography,Box } from '@mui/material'
import Menu from './Menu'
import Main from './Main'
import SideBar from './SideBar'
import Model from '../components/Model';
export default function Home() {
  const [showModel,setShowModel] = React.useState(false);
  return (
    <Grid container component={"main"} sx={{backgroundColor:'#fcf8f7'}}>
      <CssBaseline/>
      <Grid item xs={3}>
       <Menu onClickCompose={()=> setShowModel(true)}/>
      </Grid>
      <Grid item xs={8}>
      <Main/>
      </Grid>
      <Grid item xs={1}>
       <SideBar/>
       {
                showModel && (
                    <Box sx={{position:'absolute',top:0, right:20}}>
                   <Model open={showModel} setOpen={setShowModel}/>
                  </Box>
                )
            }
      </Grid>
    </Grid>
  )
}
