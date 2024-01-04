import { Box, Switch } from '@mui/material';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';



const Feature = ({mode,setMode}) => {
  return (
    <Box bgcolor={''} flex={3} p={2} sx={{ display:{xs:"none" , sm:"block"}}}>
      <Box position={'fixed'}>
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
               <HomeIcon/>
              </ListItemIcon>
              <ListItemText secondary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
               <AutoStoriesIcon/>
              </ListItemIcon>
              <ListItemText secondary="pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
               <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText secondary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
               <GroupsIcon/>
              </ListItemIcon>
              <ListItemText secondary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"  href='#home'>
              <ListItemIcon>
               <SettingsIcon/>
              </ListItemIcon>
              <ListItemText secondary="Setting" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
               <AccountBoxRoundedIcon/>
              </ListItemIcon>
              <ListItemText secondary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
               <ModeNightRoundedIcon/>
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark":"light")}/>
            </ListItemButton>
          </ListItem>
    </List>
    </Box>
    </Box>
  )
}
export default Feature;