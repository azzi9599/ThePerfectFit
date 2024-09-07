import React from 'react'
import Navbar from './Navbar'
import NavLinks from './NavLinks'

import Men1 from '../assets/Mens/Men1.jpeg';
import Men2 from '../assets/Mens/Men2.jpeg';
import Men3 from '../assets/Mens/Men3.jpeg';
import Men4 from '../assets/Mens/Men4.jpeg';
import Men5 from '../assets/Mens/Men5.jpeg';
import Men6 from '../assets/Mens/Men6.jpeg';
import Men7 from '../assets/Mens/Men7.jpeg';
import Men8 from '../assets/Mens/Men8.jpeg';
import Men9 from '../assets/Mens/Men9.jpeg';
import Men10 from '../assets/Mens/Men10.jpeg';

const trendingItems = [
  { id: 1, image: Men1, description: 'Stylish Jacket', price: '$59.99' },
  { id: 2, image: Men2 , description: 'Casual Shoes', price: '$79.99' },
  { id: 3, image: Men3 , description: 'Elegant Watch', price: '$199.99' },
  { id: 4, image: Men4 , description: 'Classic Hat', price: '$29.99' },
  { id: 5, image: Men5 , description: 'Leather Bag', price: '$89.99' },
  { id: 6, image: Men6 , description: 'Sunglasses', price: '$49.99' },
  { id: 7, image: Men7 , description: 'Jeans', price: '$69.99' },
  { id: 8, image: Men8 , description: 'T-Shirt', price: '$19.99' },
  { id: 9, image: Men9 , description: 'Blouse', price: '$39.99' },
  { id: 10, image: Men10 , description: 'Dress', price: '$59.99' },
  
];

const Men = () => {
  return (
    <div>
      
      <Navbar/>
      <NavLinks/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trendingItems.map(item => (
          <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src={item.image} alt={item.description} className="w-full h-96 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900">{item.description}</h3>
              <p className="mt-2 text-gray-600">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      
    </div>
  )
}

export default Men