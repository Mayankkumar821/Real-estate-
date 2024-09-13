import {FaSearch} from 'react-icons/fa';
import React from 'react'


export default function Header() {
  return (
  <header className='bg-blue-200 shadow-md'>
  <div className='flex justify-between items-center max-w-6xl mx-auto'>
  <h1 className='font-bold font-sm sm:text-xl flex flex-wrap p-5'>
  <span className='text-slate-500 '>Mayank</span>
  <span className='text-slate-700'>Estate</span>
  </h1>
  <from className='bg-slate-100 p-3 rounded-lg flex items-center'>
    <input type="text" placeholder='search' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
    <FaSearch className='text-slate-600'/>
  </from>
  <ul className='flex gap-4'>

    <li className='hidden sm:inline text-slate-700 hover:shadow-xl'>HOME</li>

    <li className='hidden sm:inline text-slate-700 hover:shadow-xl'> ABOUT</li>

    <li className='hidden sm:inline text-slate-700 hover:shadow-xl'> SignIn</li>
    <li className='hidden sm:inline text-slate-700 hover:shadow-xl'>SignOut</li>
  </ul>
  </div>
</header>
  );
}
