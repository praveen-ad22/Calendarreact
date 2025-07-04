import { useState } from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
function Layout() {
const [isOpen,setisOpen]=useState(false)

const toggle=()=>{
  setisOpen(!isOpen);
}

  return (
    <div className='min-h-screen bg-white flex flex-1'>
      <SideBar isOpen={isOpen} toggle={toggle}/>

    <div className='w-full flex-col'>
        <header className=' bg-gray-800 text-white p-4 flex justify-between items-center rounded-xl shadow'>
          <button
            className="lg:hidden text-2xl"
            onClick={toggle}
          >
            ☰
          </button>
          <h1 className='text-2xl font-bold'>Calendar</h1>
          <section className='font-bold rounded-2xl  w-9 h-9 text-white  bg-green-600 flex justify-center items-center'>
            P
          </section>
        </header>
        <main className='min-h-screen bg-gray-100 p-2  w-full '>
          <Outlet />
        </main>
    </div>
   
    </div>
  )
}

export default Layout; 
