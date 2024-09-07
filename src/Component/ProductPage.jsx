import React from 'react'
import { LuBadgePercent } from "react-icons/lu";


const ProductPage = () => {
  return (
    <div>
        <div className='flex'>
      <div>
      <div  className=' h-32 w-24 border-2 border-slate-950 mt-2 ml-4'></div>
      <div  className=' h-32 w-24 border-2 border-slate-950 mt-2 ml-4'></div>
      <div  className=' h-32 w-24 border-2 border-slate-950 mt-2 ml-4'></div>

          
      </div> 
      <div className='h-96 w-2/5 border-2 border-slate-950 mt-4 ml-4'></div>
      <div className='ml-12'><h1 className='text-3xl'>NAUTISTRIPE BLUE STRIPE SHIRT</h1>
      <div className='mt-6'><h1>INR 1,199 <br />
      (incl. of all taxes)</h1></div>

<div className='flex mt-12'> <LuBadgePercent size={25} / >
   <h2 className='ml-2'>  Get this for INR 1,079
Buy 2 & Get Flat 10% Off! Code: BUY2</h2></div>


<div className='flex mt-7'> <LuBadgePercent size={25} / >
<h2 className='ml-2'>  Get this for INR 959
Buy 5 & Get Flat 20% Off! Code: BUY5</h2></div>


<div className='flex mt-7'> <LuBadgePercent size={25} / >
<h2 className='ml-2' >  Get this for INR 1,019
Flat 15% Off on minimum purchase of 2699/-
Code: FLAT15</h2></div>


<div className='flex mt-7'> <LuBadgePercent size={25} / >
<h2 className='ml-2'>  Get this for INR 959
Flat 20% Off on minimum purchase of 3999/-
Code: FLAT20</h2></div>


<div className='mt-8 '><h1>SELECT A SIZE</h1></div>
<div className=' flex space-x-4'>
    <button className='px-4 py-2 border rounded-md'>S</button>
    <button className='px-4 py-2 border rounded-md'>M</button>
    <button className='px-4 py-2 border rounded-md'>L</button>
    <button className='px-4 py-2 border rounded-md'>XL</button>
</div>



      
      </div>
      </div>


<div>
    
</div>








    </div>
  )
}

export default ProductPage
