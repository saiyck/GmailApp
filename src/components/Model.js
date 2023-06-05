import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { makeStyles} from '@mui/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { Divider } from '@mui/material';

const useStyles = makeStyles(
    {
        cstDialog:{
            '& .MuiBackdrop-root':{
                backgroundColor:'unset',
            },
            '& .MuiDialog-container':{
                justifyContent:'end',
                alignItems:'end',
                
                '& .MuiPaper-root':{
                    margin:0,
                    right:`calc(100vw - 91.5%)`,
                    width:'60vh',
                    height:'70vh'
                }
            }
        }
    }
)


function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;
const styles=useStyles();

  return (    
    <DialogTitle component={'p'} sx={{ m: 0, px: 2, py:1, display:'flex', justifyContent:'space-between', alignItems:'center'}} {...other}>
      {children}
      {onClose ? (
        <Stack direction="row" gap={1.5}>
              <IconButton
          aria-label="close"
          // onClick={onClose}
          color='#000'
          sx={{p:0}}
        >
          <RemoveIcon  />
        </IconButton>
          <IconButton
          aria-label="close"
          color='#000'
          // onClick={onClose}
          sx={{p:0}}
        >
          <OpenInFullIcon sx={{width:16,height:16}}/>
        </IconButton>
      
        <IconButton
          aria-label="close"
          onClick={onClose}
          color='#000'
          sx={{p:0}}
        >
          <CloseIcon sx={{width:20,height:20}}/>
        </IconButton>
        </Stack>
      ) : null}
    </DialogTitle>
  );
}

export default function CustomizedDialogs(props) {
  const {open, setOpen} = props;

  const handleClose = () => {
    setOpen(false);
  };
const styles = useStyles();
  return (
    <div>
      <Dialog
        // onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className={styles.cstDialog}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
         <Typography>New Message</Typography>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            To
          </Typography>
          <Divider/>
          <Typography gutterBottom>
           Subject
          </Typography>
          <Divider/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
           Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}