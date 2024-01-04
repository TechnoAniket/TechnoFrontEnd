import { Avatar, Box, Button, ButtonGroup, Fab, Stack, TextField, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import styled from '@emotion/styled';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack'; import Face2Icon from '@mui/icons-material/Face2';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';
const StyledModel = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})
const UserBox = styled(Box)({
    display: 'flex',
    justifyContent: 'start',
    gap: "10px",
    marginBottom: "20px"
})
const Add = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Tooltip onClick={e => setOpen(true)}
                title="Delete"
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", sm: 30 },
                }}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModel
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={300} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={2}>
                    <Typography variant='h6' color='grey' textAlign='center'>
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar
                            src="https://images.unsplash.com/photo-1682685797743-3a7b6b8d8149?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography fontWeight={500} variant="span" marginTop="6px">
                            John Doe
                        </Typography>

                    </UserBox>
                    <TextField sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your Mind.."
                        variant="standard"
                    />
                    <Stack direction={'row'} gap={1} mt={2} mb={3}>
                        <EmojiEmotionsIcon color='primary' />
                        <ImageIcon color='secondary' />
                        <VideoCameraBackIcon color='success' />
                        <PersonAddIcon color='error' />
                    </Stack>
                    <ButtonGroup variant="contained" 
                    fullWidth
                    aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}>  <DateRangeIcon/></Button>
                    </ButtonGroup>
                </Box>
            </StyledModel>
        </>
    )
}

export default Add;