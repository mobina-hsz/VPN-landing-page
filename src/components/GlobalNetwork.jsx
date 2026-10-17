import React from 'react';

const partners = [
  { name: 'Netflix', logo: '/assets/Icon/netflix.png', heightClass: 'h-10 sm:h-12' },
  { name: 'Reddit', logo: '/assets/Icon/reddit.png', heightClass: 'h-9 sm:h-11' },
  { name: 'Amazon', logo: '/assets/Icon/amazon.png', heightClass: 'h-10 sm:h-13' },
  { name: 'Discord', logo: '/assets/Icon/discord.png', heightClass: 'h-10 sm:h-12' },
  { name: 'Spotify', logo: '/assets/Icon/spotify.png', heightClass: 'h-9 sm:h-11' },
];

const GlobalNetwork = () => {
  return (
    <section className="py-16 sm:py-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16 text-center">
        {/* Header */}
        <div className="max-w-lg mx-auto mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium text-dark-heading leading-tight">
            شبکه جهانی گسترده و پرسرعت VPN
          </h2>
          <p className="text-dark-body text-base mt-4 leading-relaxed">
            سرورهای <strong className="font-semibold text-dark-heading">LaslesVPN</strong> در سرتاسر جهان گسترده شده‌اند تا در هر نقطه‌ای از اینترنت آزاد و پرسرعت لذت ببرید.
          </p>
        </div>

        {/* Global Map Illustration */}
        <div className="relative py-6 sm:py-12 my-6">
          <img
            src="/assets/HugeGlobal.svg"
            alt="نقشه پوشش جهانی سرورها"
            className="w-full h-auto max-w-4xl mx-auto object-contain select-none pointer-events-none drop-shadow-sm"
            loading="lazy"
          />
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 sm:gap-6 mt-12 sm:mt-16 max-w-4xl mx-auto opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-2 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={`${partner.heightClass} w-auto object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;
