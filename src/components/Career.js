import React from 'react';

const Career = () => {
	return (
		<section className="pt-2 lg:pt-[20px] pb-10 lg:pb-2 bg-[#F3F4F6]">
		<div className="py-12 bg-white">
		  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		    <div className="mt-10">
		      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
		        <div className="relative">
		          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">My Skills</h2>
		          <ul>
							  <li className="flex text-base text-body-color mb-4">
							    React 
							  </li>
							  <li className="flex text-base text-body-color mb-4">
							    Typescript
							  </li>
							  <li className="flex text-base text-body-color mb-4">
							    PHP
							  </li>
							  <li className="flex text-base text-body-color mb-4">
							    Bootstrap
							  </li>
							  <li className="flex text-base text-body-color mb-4">
							    Tailwind
							  </li>
							</ul>
		        </div>

		        <div className="relative">
		          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Experience</h2>
		        </div>

		      </dl>
		    </div>
		  </div>
		</div>
		</section>
	);
}

export default Career;