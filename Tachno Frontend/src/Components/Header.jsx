import styled from '@emotion/styled';
import Face2 from '@mui/icons-material/Face2';
import Menu from '@mui/material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import Notification from '@mui/icons-material/Notifications';
import { AppBar, Avatar, Badge, Box, InputBase, MenuItem, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react'

const StylesToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
    background: "white",
    padding: "4px 10px",
    borderRadius: "5px",
    width: "40%"
}));
const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "15px",
    alignItems: "center",
    '@media (min-width: 600px)': {
        display: "flex" // For screens larger than or equal to 600px width
    },
    '@media (max-width: 599px)': {
        display: "none" // For screens smaller than 600px width
    }

}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    '@media (min-width: 600px)': {
        display: "none" // For screens larger than or equal to 600px width
    },
    '@media (max-width: 599px)': {
        display: "flex" // For screens smaller than 600px width
    }
}));
const Header = () => {
    const[open , setOpen] = useState(false)
    return (
        <AppBar position='sticky'>
            <StylesToolbar>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>HALCYON</Typography>
                <Face2 sx={{ display: { xs: 'block', sm: "none" } }} />
                <Search><InputBase placeholder='Search...' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notification />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Avatar
                         sx={{ width: 30, height: 30 }} 
                         src='data:image/jpeg;base64,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'
                         onClick={e => setOpen(true)} />
                        
                    </Badge>
                </Icons>
                       
                <UserBox onClick={(e) => setOpen(true)} >
                    <Avatar sx={{ width: 30, height: 30 }} src='data:image/jpeg;base64,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' />
                    <Typography variant='span'>John</Typography>
                </UserBox>
            </StylesToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e)=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Header;