import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Priya</span>
            <span className='text-slate-700'>Estate</span>
        </h1>
        <form className='bg-slate-100  p-3 rounded-lg flex items-center'>
            <input type="text" className='bg-transparent outline-none w-24 sm:w-64'/>
            <FaSearch className='text-slate-600'/>
        </form>
        <ul className="flex gap-3">
            <Link to={'/'}>
                <li>Home</li>
            </Link>
            <Link to={'/about'}>
                <li>About</li>
            </Link>
            <Link to={'/sign-in'}>
                <li>Sign In</li>
            </Link>
        </ul>
        </div>
    </header>
  )
}
