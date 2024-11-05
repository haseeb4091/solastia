import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Solastia?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With over a decade of experience in software development, we've helped countless businesses achieve their digital transformation goals. Our team of experts is passionate about delivering innovative solutions that drive real business value.
            </p>
            
            <div className="space-y-4">
              {[
                'Expert team of developers and engineers',
                'Proven track record of successful projects',
                'Cutting-edge technology stack',
                'Agile development methodology',
                'Dedicated support and maintenance'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-indigo-600 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;