import React from 'react';

const statsData = [
  {
    number: '+۳۹۰',
    label: 'کاربر فعال',
    icon: '/assets/Icon/heroicons_sm-user.svg',
  },
  {
    number: '+۲۰',
    label: 'موقعیت مکانی',
    icon: '/assets/Icon/gridicons_location.svg',
  },
  {
    number: '+۵۰',
    label: 'سرور اختصاصی',
    icon: '/assets/Icon/bx_bxs-server.svg',
  },
];

const Stats = () => {
  return (
    <section className="relative max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16 mt-8 sm:mt-12 mb-16 sm:mb-24">
      {/* Background soft blur ambient shadow */}
      <div
        className="absolute inset-x-8 sm:inset-x-16 -bottom-6 h-24 bg-dark-heading/5 rounded-2xl"
        style={{ filter: 'blur(70px)' }}
        aria-hidden="true"
      />

      {/* Stats Card Container */}
      <div className="relative bg-white rounded-10 shadow-card py-8 sm:py-10 px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 md:divide-x-reverse divide-grayDivider z-10">
        {statsData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-start sm:justify-center py-5 md:py-3 px-6 sm:px-10 group"
          >
            <div className="flex items-center gap-5 sm:gap-6">
              {/* Rounded Icon Circle */}
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-5 sm:w-6 h-5 sm:h-6 object-contain"
                />
              </div>

              {/* Number and Label */}
              <div className="flex flex-col text-right">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-dark-heading leading-tight">
                  {item.number}
                </span>
                <span className="text-dark-body text-base sm:text-lg font-normal">
                  {item.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
