// components/AddEventDialog.jsx
import React, { useState } from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    TextField, Button, Stack
} from '@mui/material';
import dayjs from 'dayjs';

const AddEventDialog = ({ open, onClose, onAdd }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleSubmit = () => {
        if (!title || !date || !startTime || !endTime) return;

        const newEvent = {
            title,
            date,
            startTime,
            endTime
            
        };

        onAdd(newEvent);
        onClose();
        setTitle('');
        setDate(dayjs().format('YYYY-MM-DD'));
        setStartTime('');
        setEndTime('');
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>Add New Event</DialogTitle>
            <DialogContent>
                <Stack spacing={2} mt={1}>
                    <TextField
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        label="Start Time"
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        label="End Time"
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="outlined">Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">Add Event</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddEventDialog;
