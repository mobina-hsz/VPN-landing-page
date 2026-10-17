import React from 'react';

const Hero = () => {
  return (
    <section id="about" className="pt-32 sm:pt-40 lg:pt-48 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          {/* Right Text Column (in RTL, first visual column) */}
          <div className="flex flex-col items-start justify-center order-2 lg:order-1 text-right">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-dark-heading leading-[1.3] sm:leading-[1.35] lg:leading-[1.4]">
              هر کاری آسان می‌شود با <strong className="font-bold text-dark-heading">LaslesVPN.</strong>
            </h1>
            <p className="text-dark-body text-base sm:text-lg leading-relaxed mt-5 mb-8 sm:mb-10 max-w-lg">
              شبکه‌ای پرسرعت و امن برای تمام نیازهای دیجیتال شما. با خیالی آسوده، سهولت و سرعتی مثال‌زدنی از اینترنت بدون مرز لذت ببرید.
            </p>
            <a
              href="#pricing"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-bold text-base px-12 sm:px-16 py-4 sm:py-4.5 rounded-10 shadow-brand hover:shadow-card-hover hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300"
            >
              همین حالا شروع کنید
            </a>
          </div>

          {/* Left Illustration Column */}
          <div className="flex justify-center items-center order-1 lg:order-2 w-full">
            <div className="relative w-full max-w-xl lg:max-w-none">
              <img
                src="/assets/Illustration1.png"
                alt="تصویر لندینگ LaslesVPN"
                className="w-full h-auto object-contain select-none pointer-events-none transform hover:scale-[1.01] transition-transform duration-500"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
