import React from 'react';

const footerProductLinks = [
  'دانلود اپلیکیشن',
  'تعرفه‌ها و پلن‌ها',
  'موقعیت‌های مکانی',
  'لیست سرورها',
  'کشورهای تحت پوشش',
  'وبلاگ و اخبار',
];

const footerEngageLinks = [
  'چرا LaslesVPN ؟',
  'سوالات متداول (FAQ)',
  'راهنما و آموزش‌ها',
  'درباره ما',
  'حریم خصوصی',
  'قوانین و مقررات',
];

const footerEarnMoneyLinks = ['همکاری در فروش (Affiliate)', 'شراکت تجاری'];

const Footer = () => {
  return (
    <footer className="bg-grayBg pt-40 sm:pt-48 pb-16 sm:pb-24 border-t border-grayDivider/40">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Info Column */}
          <div className="md:col-span-5 flex flex-col items-start text-right">
            <a href="#about" className="mb-6 block group">
              <img
                src="/assets/Logo.svg"
                alt="LaslesVPN"
                className="h-9 w-auto transition-transform group-hover:scale-105"
              />
            </a>
            <p className="text-dark-body text-base leading-relaxed mb-6 max-w-sm">
              <strong className="font-bold text-dark-heading">LaslesVPN</strong> یک شبکه خصوصی مجازی اختصاصی با بالاترین سطح امنیت، سرعت و قابلیت‌های ویژه است.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mb-8">
              <a
                href="#facebook"
                aria-label="فیس‌بوک"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-card hover:bg-primary group transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src="/assets/Icon/facebook.svg"
                  alt="Facebook"
                  className="w-4 h-4 transition-transform group-hover:scale-110 filter group-hover:brightness-0 group-hover:invert"
                />
              </a>
              <a
                href="#twitter"
                aria-label="توییتر"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-card hover:bg-primary group transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src="/assets/Icon/twitter.svg"
                  alt="Twitter"
                  className="w-4 h-4 transition-transform group-hover:scale-110 filter group-hover:brightness-0 group-hover:invert"
                />
              </a>
              <a
                href="#instagram"
                aria-label="اینستاگرام"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-card hover:bg-primary group transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src="/assets/Icon/instagram.svg"
                  alt="Instagram"
                  className="w-4 h-4 transition-transform group-hover:scale-110 filter group-hover:brightness-0 group-hover:invert"
                />
              </a>
            </div>

            <p className="text-grayMuted text-sm font-medium">
              ©{new Date().getFullYear()}تمامی حقوق برای LaslesVPN محفوظ است.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-right">
            {/* Product Links */}
            <div>
              <h4 className="text-dark-heading font-bold text-lg mb-5">
                محصولات
              </h4>
              <ul className="flex flex-col gap-3">
                {footerProductLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link}`}
                      className="text-dark-body text-sm sm:text-base hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engage Links */}
            <div>
              <h4 className="text-dark-heading font-bold text-lg mb-5">
                راهنما و ارتباط
              </h4>
              <ul className="flex flex-col gap-3">
                {footerEngageLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link}`}
                      className="text-dark-body text-sm sm:text-base hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Earn Money Links */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-dark-heading font-bold text-lg mb-5">
                کسب درآمد
              </h4>
              <ul className="flex flex-col gap-3">
                {footerEarnMoneyLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link}`}
                      className="text-dark-body text-sm sm:text-base hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
