import React from 'react';

const SubscribeCTA = () => {
  return (
    <div className="relative max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16 -mb-24 sm:-mb-28 z-20">
      {/* Background soft ambient blur */}
      <div
        className="absolute inset-x-8 sm:inset-x-20 -bottom-6 h-28 bg-dark-heading/5 rounded-2xl"
        style={{ filter: 'blur(70px)' }}
        aria-hidden="true"
      />

      {/* Card Content */}
      <div className="relative bg-white rounded-10 shadow-card py-9 sm:py-12 px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        {/* Text */}
        <div className="flex flex-col text-center md:text-right max-w-md">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-dark-heading leading-tight sm:leading-snug">
            همین حالا مشترک شوید و از <br className="hidden sm:inline" /> قابلیت‌های ویژه بهره‌مند شوید!
          </h3>
          <p className="text-dark-body text-base mt-3">
            به جمع کاربران ما ملحق شده و اوج سرعت و امنیت را تجربه کنید.
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="#pricing"
          className="bg-primary hover:bg-primary-dark text-white font-bold text-base px-12 sm:px-16 py-4 sm:py-4.5 rounded-10 shadow-brand hover:shadow-card-hover hover:scale-105 active:scale-95 transition-all duration-300 flex-shrink-0 text-center"
        >
          خرید اشتراک
        </a>
      </div>
    </div>
  );
};

export default SubscribeCTA;
