import React from 'react'

const SideBar = ({toggle,isOpen}) => {
  return (
  <>
  {
    isOpen && (
        <section onClick={toggle} className='fixed bg-opacity-0 inset-0 bg-black z-50 lg:hidden'>

        </section>
    )
  }
          <section className={`fixed z-50 top-0 left-0 h-full rounded m-1 w-64 bg-white shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
              } lg:translate-x-0 lg:static lg:block`}>
                <h2 className='text-xl font-bold p-1'>Side Bar</h2>

  </section>
  </>
  )
}

export default SideBar