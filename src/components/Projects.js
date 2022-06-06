import React from 'react';

const Projects = () => {
  return (
    <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
      <div className="container">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Projects</h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
              <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h4>Portfolio 1</h4>
                <p className="text-base text-body-color leading-relaxed mb-7">
                   Lorem ipsum dolor sit amet pretium consectetur adipiscing
                   elit. Lorem consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
              <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h4>Portfolio 2</h4>
                <p className="text-base text-body-color leading-relaxed mb-7">
                   Lorem ipsum dolor sit amet pretium consectetur adipiscing
                   elit. Lorem consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
              <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h4>Portfolio 3</h4>
                <p className="text-base text-body-color leading-relaxed mb-7">
                   Lorem ipsum dolor sit amet pretium consectetur adipiscing
                   elit. Lorem consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default Projects;
