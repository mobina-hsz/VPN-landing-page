import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'feature', 'pricing', 'testimonials'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'درباره ما', href: '#about', id: 'about' },
    { name: 'قابلیت‌ها', href: '#feature', id: 'feature' },
    { name: 'تعرفه‌ها', href: '#pricing', id: 'pricing' },
    { name: 'نظرات کاربران', href: '#testimonials', id: 'testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-header py-3'
          : 'bg-white py-6 sm:py-8'
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#about" className="flex items-center gap-2 group">
          <img
            src="/assets/Logo.svg"
            alt="LaslesVPN"
            className="h-9 w-auto transition-transform duration-200 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`nav-link text-base transition-colors duration-200 ${
                  activeSection === link.id
                    ? 'text-primary font-bold active'
                    : 'text-dark-body hover:text-primary font-normal'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA / Auth buttons */}
        <div className="hidden sm:flex items-center gap-6">
          <button className="text-dark-heading font-medium text-base hover:text-primary transition-colors duration-200 cursor-pointer">
            ورود
          </button>
          <button className="text-primary font-medium text-base border-2 border-primary rounded-full px-8 sm:px-10 py-2.5 sm:py-3 hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-brand-sm active:scale-95 cursor-pointer">
            ثبت‌نام
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-3">
          <button className="text-primary font-medium text-sm border border-primary rounded-full px-4 py-1.5 hover:bg-primary hover:text-white transition-all">
            ورود
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-dark-heading hover:text-primary focus:outline-none"
            aria-label="تغییر وضعیت منو"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-grayDivider px-6 py-5 shadow-lg transition-all">
          <ul className="flex flex-col gap-4 text-right">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block py-2 text-base ${
                    activeSection === link.id
                      ? 'text-primary font-bold'
                      : 'text-dark-body hover:text-primary'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-3 border-t border-grayDivider flex flex-col gap-3">
              <button className="w-full text-center py-2.5 font-medium text-dark-heading hover:text-primary">
                ورود
              </button>
              <button className="w-full text-center py-2.5 font-medium text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all">
                ثبت‌نام
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
