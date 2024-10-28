import React, { useState } from 'react';
import scansplit from '../assets/scansplit.png'; 
import Button from './Button'; 
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const navigation = [
    { id: 1, title: 'A', url: '#A' },
    { id: 2, title: 'B', url: '#B' },
    { id: 3, title: 'C', url: '#C' },
    { id: 4, title: 'D', url: '#D' },
    { id: 5, title: 'E', url: '#E' }
  ];

  const toggleNavigation = () => {
    if (openNavigation) {
      enablePageScroll();
    } else {
      disablePageScroll();
    }
    setOpenNavigation(!openNavigation);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-black backdrop-blur-sm border-b border-neutral-600">
      <div className="flex items-center justify-between px-5 lg:px-10 py-4">
        
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <img src={scansplit} width={40} height={40} alt="Logo" />
          <h1 className="font-mono text-2xl text-white">ScanSplit</h1>
        </a>

        {/* Desktop Navigation */}
        <nav className={`lg:flex ${openNavigation ? "block" : "hidden"} lg:static`}>
          <ul className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  className="text-white hover:text-purple-500 text-lg lg:text-sm uppercase tracking-wide transition-colors"
                  onClick={() => setOpenNavigation(false)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* "Sign in" and "New Account" buttons */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="#newaccount" className="text-white uppercase tracking-wide text-lg lg:text-sm">New Account</a>
          <Button href="#login" className="text-white bg-transparent px-5 py-2 rounded transition-transform duration-200 hover:scale-105">
            Sign in
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleNavigation}
            className="text-white focus:outline-none transition-transform duration-300 transform hover:scale-110"
          >
            {openNavigation ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`lg:hidden bg-neutral-800 mobile-nav transition-transform duration-500 transform ${
          openNavigation ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        
        {/* Header with Logo, Title, and Close Button */}
        <div className="flex items-center justify-between px-4 py-3 shadow-lg bg-black">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2">
            <img src={scansplit} width={30} height={30} alt="Logo" />
            <h1 className="text-white text-lg font-mono">ScanSplit</h1>
          </div>

          {/* Close Button */}
          <Button
            className="text-white text-3xl transition-transform duration-300 transform hover:rotate-90"
            onClick={toggleNavigation}
          >
            &times;
          </Button>
        </div>

        {/* Decorative Divider */}
        <div className="border-t border-gray-700 mx-8 my-4 relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black px-4 text-white text-sm tracking-widest"></div>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col items-center space-y-6 py-6">
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                className="text-white text-lg uppercase tracking-wider cursor-pointer transition-transform duration-200 hover:scale-105 hover:text-blue-400"
                onClick={() => setOpenNavigation(false)}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Account Actions */}
        <div className="text-center py-6 space-y-4">
          <div className="text-white text-lg uppercase font-semibold">New Account</div>
          <Button href="#login" className="text-white bg-transparent px-6 py-3 rounded-lg border border-gray-500 transition-all duration-200 hover:border-blue-500 hover:text-blue-500 hover:scale-105">
            Sign in
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
