import React from 'react';
import dayjs from 'dayjs';

const Days = ({ date, opendialog, events }) => {
    const isToday = date && dayjs().isSame(date, 'day');
    const isCurrentMonth = date && date.month() === dayjs().month();
    const hasEvents = events.length > 0;

    return (
        <div
            className={`
                min-h-[7rem] border border-gray-200 rounded-lg
                transition-all duration-200 ease-in-out
                ${date ? 'cursor-pointer hover:border-blue-300 hover:shadow-md' : 'bg-gray-50'}
               
            `}
            onClick={() => date && opendialog(date)}
        >
            <div className="h-full flex flex-col">
                {/* Date indicator */}
                <div className={`
                    m-1 w-6 h-6 rounded-full flex items-center justify-center
                    text-xs font-medium
                    ${isToday ? 'bg-blue-600 text-white' : 'text-gray-700'}
                    ${hasEvents ? 'mb-2' : 'mt-auto'}
                `}>
                    {date ? date.format('D') : ''}
                </div>

                {/* Events list */}
                {hasEvents && (
                    <div className="flex-1 px-1 pb-1 space-y-1 overflow-hidden">
                        {events.slice(0, 2).map((e, idx) => (
                            <div
                                key={idx}
                                className={`
                                    text-xs truncate px-1 py-0.5 rounded
                                    ${isToday ?
                                        'bg-blue-100 text-blue-800 border border-blue-200' :
                                        'bg-gray-100 text-gray-800 border border-gray-200'
                                    }
                                    font-medium
                                `}
                            >
                                {e.title}
                            </div>
                        ))}
                        {events.length > 2 && (
                            <div className={`
                                text-xs px-1 py-0.5 rounded text-center
                                ${isToday ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-500'}
                            `}>
                                +{events.length - 2} more
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Days;