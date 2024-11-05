import React from 'react';
import { ArrowRight, Code2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transforming Ideas into
              <span className="text-indigo-600"> Digital Reality</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We craft innovative software solutions that empower businesses to thrive in the digital age. From custom development to enterprise solutions, we're your partner in digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-3xl transform rotate-3 opacity-10"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-xl">
              <Code2 className="h-12 w-12 text-indigo-600 mb-6" />
              <div className="space-y-4">
                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                <div className="h-2 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;