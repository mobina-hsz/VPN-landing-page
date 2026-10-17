import React, { useState } from 'react';

const plans = [
  {
    id: 'free',
    name: 'پلن رایگان',
    image: '/assets/Free.png',
    features: [
      'پهنای باند نامحدود',
      'اتصال کاملاً رمزگذاری‌شده',
      'بدون ذخیره لاگ و گزارش ترافیک',
      'سازگار با تمامی دستگاه‌ها',
    ],
    price: 'رایگان',
    period: '',
  },
  {
    id: 'standard',
    name: 'پلن استاندارد',
    image: '/assets/Standard.png',
    features: [
      'پهنای باند نامحدود',
      'اتصال کاملاً رمزگذاری‌شده',
      'بدون ذخیره لاگ و گزارش ترافیک',
      'سازگار با تمامی دستگاه‌ها',
      'اتصال به سرورهای سراسر جهان',
    ],
    price: '۹ دلار',
    period: ' / ماهانه',
  },
  {
    id: 'premium',
    name: 'پلن ویژه (پریمیوم)',
    image: '/assets/Premium.png',
    features: [
      'پهنای باند نامحدود',
      'اتصال کاملاً رمزگذاری‌شده',
      'بدون ذخیره لاگ و گزارش ترافیک',
      'سازگار با تمامی دستگاه‌ها',
      'اتصال به سرورهای سراسر جهان',
      'دسترسی اول به قابلیت‌های جدید',
    ],
    price: '۱۲ دلار',
    period: ' / ماهانه',
    recommended: true,
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('premium');

  return (
    <section id="pricing" className="bg-gradient-to-b from-grayBg to-white py-16 sm:py-24">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-lg mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium text-dark-heading leading-tight">
            پلن مناسب خود را انتخاب کنید
          </h2>
          <p className="text-dark-body text-base mt-4 leading-relaxed">
            بهترین بسته متناسب با نیازهایتان را انتخاب کنید و با خیالی آسوده و پرسرعت در اینترنت فعالیت نمایید.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`flex flex-col justify-between items-center bg-white rounded-xl py-10 px-6 lg:px-10 border-2 transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'border-primary shadow-card-hover -translate-y-2'
                    : 'border-cardBorder hover:border-primary/60 hover:-translate-y-1 hover:shadow-card'
                }`}
              >
                {/* Top Section */}
                <div className="flex flex-col items-center w-full">
                  <div className="h-44 flex items-center justify-center mb-6">
                    <img
                      src={plan.image}
                      alt={plan.name}
                      className="h-36 sm:h-40 w-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-dark-heading mb-8">
                    {plan.name}
                  </h3>

                  {/* Features List */}
                  <ul className="flex flex-col gap-3.5 w-full text-right text-dark-body text-sm mb-8 pr-2 sm:pr-4">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <img
                          src="/assets/Icon/jam_check.svg"
                          alt="تیک تایید"
                          className="w-4 h-4 flex-shrink-0"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Pricing & Action */}
                <div className="flex flex-col w-full items-center mt-auto pt-6">
                  <div className="text-2xl font-bold text-dark-heading mb-6 flex items-baseline gap-1">
                    <span>{plan.price}</span>
                    {plan.period && (
                      <span className="text-dark-body text-base font-normal">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <button
                    className={`w-full max-w-[200px] py-2.5 sm:py-3 px-8 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${
                      isSelected
                        ? 'bg-primary text-white shadow-brand hover:bg-primary-dark active:scale-95'
                        : 'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-brand-sm'
                    }`}
                  >
                    انتخاب پلن
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
