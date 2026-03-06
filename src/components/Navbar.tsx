import React from 'react';
import { Link } from 'react-router-dom';
import { CLINIC_INFO } from '../data';

export function Navbar() {
  return (
    <nav className="w-full py-8 px-12 flex items-center justify-between">
      <div className="flex gap-10 text-sm tracking-widest uppercase font-medium">
        <Link to="/" className="hover:opacity-60 transition-opacity">About</Link>
        <Link to="/" className="hover:opacity-60 transition-opacity">Services</Link>
        <Link to="/" className="hover:opacity-60 transition-opacity">Pricing</Link>
        <Link to="/" className="hover:opacity-60 transition-opacity">Contact</Link>
      </div>

      <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2">
        <Link to="/" className="flex flex-col items-center">
          <svg width="60" height="60" viewBox="0 0 100 100" className="mb-3 fill-current">
            <path d="M 50 10 A 40 40 0 1 0 90 50 A 30 30 0 1 1 50 10 Z" />
          </svg>
          <div className="text-2xl font-serif tracking-[0.2em] uppercase flex items-center gap-1">
            <span>THE GLO</span>
            <span className="relative">
              <svg width="18" height="18" viewBox="0 0 24 24" className="inline-block -mt-1" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L22 20H2Z" />
                <path d="M7 14H17" />
              </svg>
            </span>
            <span>LCHEMIST</span>
          </div>
          <div className="text-[10px] tracking-[0.3em] uppercase mt-2 border-t border-black/30 pt-2 w-3/4 text-center">Skin and Laser Lab</div>
        </Link>
      </div>

      <div>
        <a 
          href={CLINIC_INFO.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-black/80 transition-colors"
        >
          Book Appointment
        </a>
      </div>
    </nav>
  );
}
