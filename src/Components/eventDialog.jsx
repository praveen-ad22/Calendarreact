import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, List, ListItem, ListItemText } from '@mui/material';
import dayjs from 'dayjs';

const EventDialog = ({ open, onClose, date, events = [] }) => {
    if (!date) return null;

    const formatted = dayjs(date).format('dddd, MMMM D, YYYY');

    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>{formatted}</DialogTitle>
            <DialogContent dividers>
                {events.length === 0 ? (
                    <Typography variant="body2" color="text.secondary">
                        No events for this day.
                    </Typography>
                ) : (
                    <List>
                        {events.map((event, idx) => (
                            <ListItem key={idx} divider>
                                <ListItemText
                                    primary={event.title}
                                    secondary={`${event.startTime} - ${event.endTime}`}
                                />
                            </ListItem>
                        ))}
                    </List>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="outlined">Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EventDialog;
