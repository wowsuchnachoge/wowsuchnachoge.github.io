'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
];

type NavbarProps = {
    readonly selectedMenuItem: number;
}

export default function Navbar({ selectedMenuItem }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="shadow-md sticky w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center space-x-2 flex-shrink-0">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={40}
                        height={40}
                    />
                    <span className="text-xl font-semibold tracking-tight hover:text-green-600">
                    </span>
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
                {menuItems.map((item, index) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className={`hover:text-green-600 px-3 py-2 text-sm font-medium ${index === selectedMenuItem ? 'menuItemSelected' : ''}`}
                >
                    {item.name}
                </Link>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-green-600 focus:outline-none"
                >
                {/* Simple hamburger icon */}
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    {isOpen ? (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                    ) : (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    )}
                </svg>
                </button>
            </div>
            </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
            <div className="md:hidden px-4 pb-4 bg-white dark:bg-gray-800 space-y-2 shadow">
            {menuItems.map((item, index) => (
                <Link
                key={item.name}
                href={item.href}
                className={`block hover:text-green-600 px-3 py-2 text-sm font-medium ${index === selectedMenuItem ? 'menuItemSelected' : ''}`}
                onClick={() => setIsOpen(false)}
                >
                {item.name}
                </Link>
            ))}
            </div>
        )}
        </nav>
    );
}
