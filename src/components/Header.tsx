"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-gradient-to-r from-indigo-800 to-purple-600 text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold">ShopEase</h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link
            href="/products"
            className="hover:text-gray-300 transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-300 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-indigo-800 to-purple-600 text-white py-4">
          <nav className="flex flex-col items-center space-y-4">
            <Link
              href="/"
              onClick={closeMenu}
              className="hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/products"
              onClick={closeMenu}
              className="hover:text-gray-300 transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
