import React from "react";
import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";


const NavLinks = () => {
  return (
    <div className="flex justify-between items-center bg-black text-white h-14">
      <div>
        
        <NavLink to='/'>      <h1  className='text-3xl  flex justify-between items-center pl-9 '  >The PerfectFit</h1>
        </NavLink>
        </div>
        <div className="">
         <ul className="lg:flex lg:items-center lg:gap-3"> <NavLink to='/sale'className={({ isActive }) => isActive ? 'w-20 text-center bg-red-500 rounded-md' : 'w-20 text-center hover:bg-red-500 rounded-md'}>SALE</NavLink>
          <NavLink to='/sun'className={({ isActive }) => isActive ? 'w-20 text-center bg-red-500 rounded-md' : 'w-20 text-center hover:bg-red-500 rounded-md'}>MEN</NavLink>
      <NavLink to='/womenn'className={({ isActive }) => isActive ? 'w-20 text-center bg-red-500 rounded-md' : 'w-20 text-center hover:bg-red-500 rounded-md'}>WOMEN</NavLink>
               <NavLink to='/kidss'className={({ isActive }) => isActive ? 'w-20 text-center bg-red-500 rounded-md' : 'w-20 text-center hover:bg-red-500 rounded-md'}>KIDS</NavLink>
               <NavLink to='sungg'className={({ isActive }) => isActive ? 'w-20 text-center bg-red-500 rounded-md' : 'w-20 text-center hover:bg-red-500 rounded-md'}>ABOUT US</NavLink>
                    <NavLink to='/Logon'className={({ isActive }) => isActive ? 'w-20 text-center bg-red-500 rounded-md' : 'w-20 text-center hover:bg-red-500 rounded-md'}>LOGIN</NavLink>
                    </ul></div>
        

        <div>
        <ul className='flex gap-3 pr-9 '>
     <NavLink to='/Logon'> <CiUser  size={35}/></NavLink> <IoSearchOutline size={30}/>
     <CiHeart  size={35}/> <CiShoppingCart size={35}/>

      </ul>
      </div>
   


      </div>
  );
};

export default NavLinks;
