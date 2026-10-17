import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Feature from './components/Feature';
import Pricing from './components/Pricing';
import GlobalNetwork from './components/GlobalNetwork';
import Testimonials from './components/Testimonials';
import SubscribeCTA from './components/SubscribeCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-dark-body font-rubik flex flex-col selection:bg-primary-light selection:text-primary">
      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Floating Numbers / Stats Section */}
        <Stats />

        {/* Feature Highlights Section */}
        <Feature />

        {/* Pricing Tiers Section */}
        <Pricing />

        {/* Global Network Map & Partner Logos */}
        <GlobalNetwork />

        {/* Customer Testimonials Carousel */}
        <Testimonials />

        {/* Floating Subscribe Call-To-Action */}
        <SubscribeCTA />
      </main>

      {/* Comprehensive Footer */}
      <Footer />
    </div>
  );
}

export default App;

