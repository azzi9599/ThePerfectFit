import React from 'react'
import Navbar from '../Navbar'
import NavLinks from '../NavLinks'

import sale1  from '../../assets/sales/sale1.jpeg';
import sale2  from '../../assets/sales/sale2.jpeg';
import sale3  from '../../assets/sales/sale3.jpeg';
import sale4  from '../../assets/sales/sale4.jpeg';
import sale5  from '../../assets/sales/sale5.jpeg';
import sale6  from '../../assets/sales/sale6.jpeg';
import  sale7 from '../../assets/sales/sale7.jpeg';
import  sale8 from '../../assets/sales/sale8.jpeg';
import  sale9 from '../../assets/sales/sale9.jpeg';
import  sale10  from '../../assets/sales/sale10.jpeg';
import  sale11  from '../../assets/sales/sale11.jpeg';
import  sale16  from '../../assets/sales/sale16.jpeg';
import  sale21  from '../../assets/sales/sale21.jpeg';
import  sale22  from '../../assets/sales/sale22.jpeg';
import  sale23  from '../../assets/sales/sale23.jpeg';
import  sale24  from '../../assets/sales/sale24.jpeg';
import  sale25  from '../../assets/sales/sale25.jpeg';


const saleItems = [
  { id: 1, image: sale1, description: 'Stylish Jacket', price: '$59.99' },
  { id: 2, image: sale2 , description: 'Casual Shoes', price: '$79.99' },
  { id: 3, image: sale3 , description: 'Elegant Watch', price: '$199.99' },
  { id: 4, image: sale4 , description: 'Classic Hat', price: '$29.99' },
  { id: 5, image: sale5 , description: 'Leather Bag', price: '$89.99' },
  { id: 6, image: sale6 , description: 'Sunglasses', price: '$49.99' },
  { id: 7, image: sale7 , description: 'Jeans', price: '$69.99' },
  { id: 8, image: sale8 , description: 'T-Shirt', price: '$19.99' },
  { id: 9, image: sale9 , description: 'Blouse', price: '$39.99' },
  { id: 10, image: sale10 , description: 'Dress', price: '$59.99' },
  { id: 11, image: sale11 , description: 'Leather Bag', price: '$89.99' },
  { id: 12, image: sale16 , description: 'Sunglasses', price: '$49.99' },
  { id: 13, image: sale21 , description: 'Jeans', price: '$69.99' },
  { id: 14, image: sale22 , description: 'T-Shirt', price: '$19.99' },
  { id: 15, image: sale23 , description: 'Blouse', price: '$39.99' },
  { id: 16, image: sale24 , description: 'Dress', price: '$59.99' },
  { id: 17, image: sale25 , description: 'Leather Bag', price: '$89.99' },
  
];

const Sale = () => {
  return (
    <div>
      
      
      <Navbar/>
      <NavLinks/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {saleItems.map(item => (
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

export default Sale