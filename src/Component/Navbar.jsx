import React from 'react'
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from 'react-router-dom';



const 
Navbar = () => {
  return (
    <div className='flex justify-between p-9'>
                <NavLink to='/'>      <h1  className='text-3xl   '  >The PerfectFit</h1>
                </NavLink>

      <input className='border-2 w-4/12 rounded-md shadow-md	' placeholder="   Search here"/>  
      <ul className='flex gap-5'>
     <NavLink to='/Logon'> <CiUser  size={35}/></NavLink>  <CiHeart  size={35}/> <CiShoppingCart size={35}/>

      </ul>


    </div>
  )
}

export default 
Navbar