import React from 'react'
import Navbar from '../Navbar'
import NavLinks from '../NavLinks'

import kid1 from '../../assets/kids/kid1.jpeg';
import kid2 from '../../assets/kids/kid2.jpeg';
import kid3 from '../../assets/kids/kid3.jpeg';
import kid4 from '../../assets/kids/kid4.jpeg';
import kid5 from '../../assets/kids/kid5.jpeg';
import kid6 from '../../assets/kids/kid6.jpeg';
import kid7 from '../../assets/kids/kid7.jpeg';
import kid8 from '../../assets/kids/kid8.jpeg';
import kid9 from '../../assets/kids/kid9.jpeg';
import kid10 from '../../assets/kids/kid10.jpeg';

const trendingItems = [
  { id: 1, image: kid1, description: 'Stylish Jacket', price: '$59.99' },
  { id: 2, image: kid2 , description: 'Casual Shoes', price: '$79.99' },
  { id: 3, image: kid3 , description: 'Elegant Watch', price: '$199.99' },
  { id: 4, image: kid4 , description: 'Classic Hat', price: '$29.99' },
  { id: 5, image: kid5 , description: 'Leather Bag', price: '$89.99' },
  { id: 6, image: kid6 , description: 'Sunglasses', price: '$49.99' },
  { id: 7, image: kid7 , description: 'Jeans', price: '$69.99' },
  { id: 8, image:  kid8 , description: 'T-Shirt', price: '$19.99' },
  { id: 9, image:  kid9 , description: 'Blouse', price: '$39.99' },
  { id: 10, image: kid10 , description: 'Dress', price: '$59.99' },
  
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