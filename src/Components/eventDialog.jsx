import React from 'react';
import dayjs from 'dayjs';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    List,
    ListItem,
    ListItemText,
    IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'; 

const EventDialog = ({ open, onClose, date, events = [], onDelete }) => {
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
                            <ListItem
                                key={idx}
                                divider
                                secondaryAction={
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={() => onDelete(event)}
                                    >
                                        <DeleteIcon color="error" />
                                    </IconButton>
                                }
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary={`${event.startTime || event.time} - ${event.endTime || event.duration}`}
                                />
                            </ListItem>
                        ))}
                    </List>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="outlined">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EventDialog;
