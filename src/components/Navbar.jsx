import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around    bg-violet-900 text-white py-2'>
        <div className="logo ">
            <span className='font-bold text-xl mx-8 cursor-pointer'>iTask</span>
        </div>
        {/* <ul className="flex gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Todo</li>
        </ul> */}
    </nav>
  )
}

export default Navbar
