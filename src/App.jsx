import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Calendar from './Components/Calendar'
import Dashboard from './Components/Dashboard'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
    <Route index element={<Calendar />} />
      <Route  path='calender' element={<Calendar />} />
      <Route path='dashboard' element={<Dashboard/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App