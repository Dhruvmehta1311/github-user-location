import React from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
const NavBar = () => {
  return (
    <div className='bg-black shadow-lg flex items-center justify-between px-4 text-xl backdrop-blur-lg text-white min-h-[40px]'>
        <p>Home</p>
        <div>
        <IoSunnyOutline className='cursor-pointer text-2xl' />
        {/* <IoIosMoon className='cursor-pointer text-2xl' /> */}
        </div>

    </div>


  )
}

export default NavBar