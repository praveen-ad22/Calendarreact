import React from 'react';
import dayjs from 'dayjs';

const Days = ({ date, opendialog ,events }) => {
    const isToday = date && dayjs().isSame(date, 'day');

    return (
        <div className="h-24 w-full border-t shadow-sm text-sm rounded-lg" onClick={() => date && opendialog(date)}>
            <div
                className={`text-right p-2  transition duration-300 ${isToday ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-100'
                    }`}
            >
                {date ? date.format('D') : ''}
                <div className='mt-1 overflow-hidden space-y-1'>
                    {events.slice(0,2).map((e,idx)=>{
                        return (
                            <div key={idx}
                            
                            className={`text-[10px] truncate px-1 py-0.5 font-bold rounded ${isToday?'bg-white text-black':'bg-blue-100 text-blue-800'}`}>{
                                e.title
                            }
                            </div>
                        )
                    })}
                </div>
                {events.length > 2 && (
                    <div className="text-[10px] text-white p-1">+{events.length - 2} more</div>
                )}
            </div>
        </div>
    );
};

export default Days;
