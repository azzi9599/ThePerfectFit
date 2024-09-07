import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-9 pb-6">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
            </ul>
          </div>
          
          {/* Shop */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Products</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Categories</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Deals</a></li>
            </ul>
          </div>
          {/* Connect with Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
