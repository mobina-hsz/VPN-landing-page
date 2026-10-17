import React from 'react';

const featureList = [
  'حفاظت آنلاین و امنیت بسیار قدرتمند.',
  'اینترنت آزاد و دسترسی بدون مرز.',
  'سرعت فوق‌العاده بالا و پایداری شبکه.',
  'بدون هیچ‌گونه محدودیت زمانی در اتصال.',
];

const Feature = () => {
  return (
    <section id="feature" className="py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Illustration Column */}
          <div className="flex justify-center items-center w-full order-2 lg:order-1">
            <div className="relative w-full max-w-lg lg:max-w-none">
              <img
                src="/assets/Illustration2.png"
                alt="قابلیت‌های LaslesVPN"
                className="w-full h-auto object-contain select-none pointer-events-none transform hover:scale-[1.01] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text & List Column */}
          <div className="flex flex-col items-start justify-center text-right order-1 lg:order-2 lg:pr-6">
            <h2 className="text-3xl sm:text-4xl font-medium text-dark-heading leading-[1.3] max-w-md">
              ویژگی‌های متعددی که برای شما فراهم کرده‌ایم
            </h2>
            <p className="text-dark-body text-base leading-relaxed mt-4 mb-6 sm:mb-8 max-w-lg">
              شما می‌توانید تمام امکانات و قابلیت‌های پیشرفته ما را به‌سادگی تجربه کرده و از کارایی اختصاصی هر یک بهره‌مند شوید.
            </p>

            <ul className="flex flex-col gap-4 sm:gap-5 w-full">
              {featureList.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-dark-body text-sm sm:text-base group"
                >
                  <img
                    src="/assets/Icon/checklist.svg"
                    alt="چک‌مارک"
                    className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                  />
                  <span className="font-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
