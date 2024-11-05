import React from 'react';
import { Code, Cloud, Database, Cpu } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-8 w-8 text-indigo-600" />,
    title: 'Custom Software Development',
    description: 'Tailored solutions designed to meet your unique business requirements and challenges.'
  },
  {
    icon: <Cloud className="h-8 w-8 text-indigo-600" />,
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure to power your digital transformation.'
  },
  {
    icon: <Database className="h-8 w-8 text-indigo-600" />,
    title: 'Enterprise Solutions',
    description: 'Comprehensive enterprise-grade applications for streamlined operations.'
  },
  {
    icon: <Cpu className="h-8 w-8 text-indigo-600" />,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions that leverage cutting-edge AI technologies.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive software solutions to help your business succeed in the digital landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;