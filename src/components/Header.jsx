import {FaSearch} from 'react-icons/fa';
import React from 'react'
import {Link} from 'react-router-dom';

export default function Header() {
  return (
  <header className='bg-blue-200 shadow-md'>
  <div className='flex justify-between items-center max-w-6xl mx-auto'>
  <Link to='/'>
  <h1 className='font-bold font-sm sm:text-xl flex flex-wrap '>
  <span className='text-slate-500 '>Mayank</span>
  <span className='text-slate-700'>Estate</span>
  </h1></Link>
  <from className='bg-slate-100 p-3 rounded-lg flex items-center'>
    <input type="text" placeholder='search' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
    <FaSearch className='text-slate-600'/>
  </from>
  <ul className='flex gap-4'>
<Link to='/'>
    <li className='hidden sm:inline text-slate-700 hover:shadow-xl'>HOME</li></Link>
<Link to='/about'>
    <li className='hidden sm:inline text-slate-700 hover:shadow-xl'> ABOUT</li></Link>

   <Link to='/Signin'> <li className=' text-slate-700 hover:shadow-xl'> SignIn</li> </Link>
   <Link to='/Signout'> <li className=' text-slate-700 hover:shadow-xl'>SignOut</li> </Link>
  </ul>
  </div>
</header>
  );
}
