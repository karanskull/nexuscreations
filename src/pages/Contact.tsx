import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['British Columbia, Canada'],
      description: 'Serving the Greater Vancouver Area'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['+1 (604) XXX-XXXX'],
      description: 'Monday to Friday, 8am - 6pm'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@nexuscreation.ca'],
      description: 'We\'ll respond within 24 hours'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: [
        'Monday - Friday: 8am - 6pm',
        'Saturday: 9am - 4pm',
        'Sunday: Closed'
      ],
      description: 'Available for emergencies'
    }
  ];

  const services = [
    'Bathroom Renovations',
    'Kitchen Transformations',
    'Custom Tile Installations',
    'Interior Renovations',
    'Commercial Projects'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90">
              Ready to transform your space? Get in touch with us today for a free consultation 
              and let's bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="border border-black rounded-xl p-8">
                <item.icon className="h-8 w-8 text-black mb-4" />
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-black font-medium">{detail}</p>
                ))}
                <p className="text-black/70 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Services Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-black mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-black mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-black mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-black mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-black mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-black mb-2">Service Interested In</label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-black mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-all duration-200 flex items-center justify-center"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Services List */}
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-8">Our Services</h2>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="border border-white/20 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">{service}</h3>
                    <p className="text-white/70">
                      Professional {service.toLowerCase()} with attention to detail and quality craftsmanship.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Our Location</h2>
            <p className="text-xl text-black">
              Serving the Greater Vancouver Area and surrounding communities in British Columbia.
            </p>
          </div>
          <div className="aspect-[16/9] w-full border-2 border-black rounded-2xl overflow-hidden">
            {/* Replace the iframe src with your actual Google Maps embed URL */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166654.7246874!2d-123.22407955!3d49.2577142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1639434345678!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 