import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import { useSelector } from 'react-redux';

export const Sidebar = ({ drawerWidth = 240 }) => {

    const { displayName } = useSelector(state => state.auth);

    return (
        <Box
            className='animate__animated animate__fadeInLeft animate__faster'
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent' //temporary
                open={true}
                // onClose={}
                // ModalProps={{
                //     keepMounted
                // }}
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                     {
                        ['Enero','Febrero','Marzo','Abril','Enero2','Febrero2','Marzo2','Abril2'].map( mes => (
                            <ListItem key={mes} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot/>
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={mes}/>
                                        <ListItemText secondary={'Et ea nostrud aliqua velit in dolor.'}/>

                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                     }
                </List>

            </Drawer>

        </Box>
    )
}


