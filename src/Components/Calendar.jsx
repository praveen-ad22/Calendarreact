import React from 'react';
import dayjs from 'dayjs';
import { useState ,useEffect} from 'react';
import { FaPlus } from 'react-icons/fa';
import { generateDays } from '../Utils/dateUtils';
import Days from './Days';
import EventDialog from './eventDialog';
const Calendar = () => {
    const [events, setEvents] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [date,setDate] = useState(dayjs())
    const handlePrev = () => setDate(prev => prev.subtract(1, 'month'));
    const handleNext = () => setDate(prev => prev.add(1, 'month'));
    const daysArray = generateDays(date);

    useEffect(() => {
        fetch('/events.json')
            .then(res => res.json())
            .then(data => setEvents(data))
            .catch(err => console.error('Failed to load events:', err));
    }, []);
    const opendialog = (date) => {
        setSelectedDate(date);
        setOpen(true);
    };
    const closeDialog = () => {
        setSelectedDate(null);
        setOpen(false);
    };
    const getEventsForDate = selectedDate ? events.filter(e => dayjs(e.date).isSame(selectedDate, 'day')) : [];
    return (
        <>
            {/* Header Section */}
            <section className="flex justify-between items-center bg-gray-100 p-2 rounded shadow-md mb-4">
                <section className="flex justify-center gap-3 items-center bg-white p-4 rounded shadow-md">
                    <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300" onClick={handlePrev}>&larr;</button>
                    <h2 className="text-xl font-bold">
                        {date.format('MMMM YYYY')}
                    </h2>
                    <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300" onClick={handleNext}>&rarr;</button>
                </section>

                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 shadow-md">
                    <FaPlus /> Add Event
                </button>
            </section>

            {/* Days of the Week Header */}
            <section className="grid grid-cols-7 gap-4 text-center font-semibold text-gray-700 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day}>{day}</div>
                ))}
            </section>
            <section className='grid grid-cols-7 gap-4 text-center'>
                {daysArray.map((day, index) => {
                    const eventforday=day ? events.filter(e => dayjs(e.date).isSame(day,'day')):[]
                    return (<Days key={index} date={day} opendialog={opendialog} events={eventforday}/>)
})}
            <EventDialog open={open} onClose={closeDialog} date={selectedDate} events={getEventsForDate} />
            </section>
        </>
    );
};

export default Calendar;
