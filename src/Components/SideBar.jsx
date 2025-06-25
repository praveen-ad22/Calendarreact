import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = ({ toggle, isOpen }) => {
    return (
        <>
            
            {isOpen && (
                <div
                    onClick={toggle}
                    className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
                />
            )}

            {/* Sidebar Container */}
            <aside
                className={`fixed z-50 top-0 left-0 h-full w-64 bg-white border-r border-gray-200 shadow-xl transform transition-transform duration-300 ease-in-out
        rounded-tr-3xl rounded-br-3xl
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:block`}
            >
                {/* Logo or Title */}
                <div className="flex items-center justify-center text-2xl font-bold py-6 border-b border-gray-300">
                    📅 My Calendar
                </div>
                <nav className="flex flex-col px-6 py-4 gap-4 text-center">
                    <NavLink
                        to="dashboard"
                        onClick={toggle}
                        className={({ isActive }) =>
                            `block w-full text-left px-4 py-2 rounded-lg font-medium transition duration-200 ${isActive
                                ? 'bg-blue-500 text-white shadow-md'
                                : 'text-gray-700 hover:bg-blue-100'
                            }`
                        }
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="calender"
                        onClick={toggle}
                        className={({ isActive }) =>
                            `block w-full text-left px-4 py-2 rounded-lg font-medium transition duration-200 ${isActive
                                ? 'bg-blue-500 text-white shadow-md'
                                : 'text-gray-700 hover:bg-blue-100'
                            }`
                        }
                    >
                        Calendar
                    </NavLink>
                </nav>
            </aside>
        </>
    );
};

export default SideBar;
