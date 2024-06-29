import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="conatainer bg-slate-600 flex justify-between items-center ">
    <div>
    <h1 className='ml-4 text-white text-xl cursor-pointer hover:font-bold transition-all'>iTask</h1>
    </div>
        <ul className='flex items-center gap-5 p-2 text-white text-xl mr-4'>
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>

        </ul>
      </div>
    </>
  )
}

export default Navbar
