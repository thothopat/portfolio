import React from 'react';
//import { BeakerIcon } from '@hericons/react/solid';

const About = () => {
return (
  <div className="bg-white">
    <div className="max-w-2xl mx-auto py-1 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
      
      <div className="grid gap-4 sm:gap-6 lg:gap-8">
        <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." className="w-full h-full object-center object-cover"/>
        </div>
      </div>
      <div>
        <div className="grid grid-rows-1">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">About Me</h2>
            <p>Patrick Thotho</p>
            <p><a href="tel:+254707712708">Call me</a></p>
            <p className="mt-4 text-gray-500">The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active cards from new ones, or can be used to archive important task lists.</p>
          </div>
          <div>
          <p>Social Media</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  );

}

export default About;
