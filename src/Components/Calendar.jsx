import React from 'react';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { FaPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { generateDays } from '../Utils/dateUtils';
import Days from './Days';
import EventDialog from './eventDialog';
import AddEventDialog from './AddEventDaialog';

const Calendar = () => {
    const [events, setEvents] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [date, setDate] = useState(dayjs());
    const [isAddDialogOpen, setAddDialogOpen] = useState(false);

    
    const handleAddEvent = (newEvent) => {
        const updatedEvents = [...events, newEvent];
        setEvents(updatedEvents);
        localStorage.setItem('events', JSON.stringify(updatedEvents));
    };

    const handlePrev = () => setDate(prev => prev.subtract(1, 'month'));
    const handleNext = () => setDate(prev => prev.add(1, 'month'));
    const daysArray = generateDays(date);

        useEffect(() => {
            const storedEvents = localStorage.getItem('events');
            if (storedEvents) {
                setEvents(JSON.parse(storedEvents));
            } else {
                fetch('/events.json')
                    .then(res => res.json())
                    .then(data => {
                        setEvents(data);
                        localStorage.setItem('events', JSON.stringify(data)); // Save to localStorage initially
                    })
                    .catch(err => console.error('Failed to load events:', err));
            }
        }, []);

    const opendialog = (date) => {
        setSelectedDate(date);
        setOpen(true);
    };

    const closeDialog = () => {
        setSelectedDate(null);
        setOpen(false);
    };
   const eventclose=()=>{
    setAddDialogOpen(false);
   }
    const getEventsForDate = selectedDate ? events.filter(e => dayjs(e.date).isSame(selectedDate, 'day')) : [];

    return (
        <div className="max-w-6xl mx-auto p-4">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <button
                        onClick={handlePrev}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        aria-label="Previous month"
                    >
                        <FaChevronLeft className="text-gray-600" />
                    </button>

                    <h2 className="text-2xl font-semibold text-gray-800">
                        {date.format('MMMM YYYY')}
                    </h2>

                    <button
                        onClick={handleNext}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        aria-label="Next month"
                    >
                        <FaChevronRight className="text-gray-600" />
                    </button>
                </div>

                <button
                    onClick={()=>setAddDialogOpen(true)}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-sm"
                >
                    <FaPlus className="text-sm" />
                    <span>Add Event</span>
                </button>
            </div>

            {/* Days of the Week Header */}
            <div className="grid grid-cols-7 gap-1 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div
                        key={day}
                        className="text-sm font-medium text-center text-gray-500 uppercase tracking-wider py-2"
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
                {daysArray.map((day, index) => {
                    const eventforday = day ? events.filter(e => dayjs(e.date).isSame(day, 'day')) : [];
                    return (
                        <Days
                            key={index}
                            date={day}
                            opendialog={opendialog}
                            events={eventforday}
                        />
                    );
                })}
            </div>

            <EventDialog
                open={open}
                onClose={closeDialog}
                date={selectedDate}
                events={getEventsForDate}
            />
            <AddEventDialog 
            open={isAddDialogOpen}
            onClose={eventclose}
            onAdd={handleAddEvent}
            />
        </div>
    );
};

export default Calendar;