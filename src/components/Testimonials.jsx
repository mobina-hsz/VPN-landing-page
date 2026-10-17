import React, { useState } from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'ویژ رابرت',
    location: 'ورشو، لهستان',
    image: '/assets/people-1.png',
    rating: '۴.۵',
    comment:
      'واقعاً از استفاده از این VPN فوق‌العاده راضی هستم؛ عملکردش بسیار فراتر از انتظارات من بود و تاکنون هیچ قطعی یا افت سرعتی نداشته‌ام. LaslesVPN همیشه بهترینه.',
  },
  {
    id: 2,
    name: 'یسیکا کریستی',
    location: 'شانشی، چین',
    image: '/assets/people-2.png',
    rating: '۴.۵',
    comment:
      'من عاشق این سرویسم، چون مدام به سفر می‌روم و نیاز دارم تمام دستگاه‌هایم همیشه با سرعت بالا، بدون محدودیت و با امنیت کامل متصل بمانند.',
  },
  {
    id: 3,
    name: 'کیم یونگ جو',
    location: 'سئول، کره جنوبی',
    image: '/assets/people-3.png',
    rating: '۴.۵',
    comment:
      'برای کسب‌وکار من که به ارتباط امن و اختصاصی با بالاترین استانداردهای رمزنگاری نیاز دارد، این سرویس فوق‌العاده مطمئن و کارآمد است.',
  },
  {
    id: 4,
    name: 'مایکل چن',
    location: 'سنگاپور',
    image: '/assets/people-1.png',
    rating: '۴.۸',
    comment:
      'سرعت اتصال خارق‌العاده است! جابجایی بین سرورهای کشورهای مختلف به شکل آنی انجام می‌شود. برای کارهای روزمره و حرفه‌ای شدیداً توصیه می‌کنم.',
  },
  {
    id: 5,
    name: 'سارا جنکینز',
    location: 'لندن، انگلستان',
    image: '/assets/people-2.png',
    rating: '۴.۹',
    comment:
      'بهترین سرویس حفظ حریم خصوصی که تجربه کرده‌ام؛ راه‌اندازی کمتر از دو دقیقه زمان برد و پشتیبانی نیز بسیار سریع و حرفه‌ای راهنمایی کردند.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = testimonialsData.length - 1;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="pt-16 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-lg mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium text-dark-heading leading-tight">
            مورد اعتماد هزاران مشتری راضی و وفادار
          </h2>
          <p className="text-dark-body text-base mt-4 leading-relaxed">
            این‌ها داستان‌ها و تجربیات واقعی کاربرانی است که با کمال رضایت از سرویس‌ها و قابلیت‌های ویژه ما استفاده می‌کنند.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="relative overflow-hidden py-4 -mx-4 px-4">
          <div
            className="flex gap-6 sm:gap-8 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(${currentIndex * (window.innerWidth < 768 ? 100 : window.innerWidth < 1024 ? 50 : 33.333)}%)`,
            }}
          >
            {testimonialsData.map((item, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] flex-shrink-0 bg-white rounded-xl p-7 sm:p-8 border-2 flex flex-col justify-between transition-all duration-300 cursor-pointer min-h-[230px] text-right ${
                    isActive
                      ? 'border-primary shadow-card scale-[1.01]'
                      : 'border-cardBorder hover:border-primary/60 hover:shadow-sm'
                  }`}
                >
                  {/* Top user row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0 ring-2 ring-primary/20"
                      />
                      <div className="flex flex-col text-right">
                        <h3 className="text-base sm:text-lg font-bold text-dark-heading leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-dark-body text-xs sm:text-sm mt-0.5">
                          {item.location}
                        </p>
                      </div>
                    </div>

                    {/* Rating badge */}
                    <div className="flex items-center gap-1.5 bg-primary-light/50 px-2.5 py-1 rounded-full">
                      <span className="text-sm font-bold text-dark-heading">
                        {item.rating}
                      </span>
                      <img
                        src="/assets/Icon/stars.svg"
                        alt="ستاره"
                        className="w-3.5 h-3.5 object-contain"
                      />
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-dark-heading text-sm sm:text-base leading-relaxed text-right flex-grow mt-2">
                    «{item.comment}»
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between mt-12 sm:mt-16">
          {/* Indicator Dots */}
          <div className="flex items-center gap-3">
            {testimonialsData.slice(0, 4).map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setCurrentIndex(dotIndex)}
                className={`h-4 rounded-full transition-all duration-300 ${
                  currentIndex === dotIndex
                    ? 'w-11 bg-primary shadow-brand-sm'
                    : 'w-4 bg-grayDivider hover:bg-grayMuted'
                }`}
                aria-label={`رفتن به اسلاید ${dotIndex + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4 sm:gap-5">
            <button
              onClick={prevSlide}
              className="w-12 sm:w-14 h-12 sm:h-14 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-brand-sm active:scale-95 group bg-white"
              aria-label="اسلاید قبلی"
            >
              <img
                src="/assets/Icon/eva_arrow-next-fill.svg"
                alt="قبلی"
                className="w-5 sm:w-6 h-5 sm:h-6 transition-transform group-hover:translate-x-0.5 filter group-hover:brightness-0 group-hover:invert"
              />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 sm:w-14 h-12 sm:h-14 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-brand-sm active:scale-95 group bg-white"
              aria-label="اسلاید بعدی"
            >
              <img
                src="/assets/Icon/eva_arrow-back-fill.svg"
                alt="بعدی"
                className="w-5 sm:w-6 h-5 sm:h-6 transition-transform group-hover:-translate-x-0.5 filter group-hover:brightness-0 group-hover:invert"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
