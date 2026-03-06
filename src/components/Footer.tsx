import React from 'react';
import { Link } from 'react-router-dom';
import { CLINIC_INFO, NEIGHBORHOODS, SERVICES } from '../data';

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#fdf7d1] py-16 px-8 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-serif text-2xl mb-4">{CLINIC_INFO.name}</h3>
          <p className="text-sm opacity-80 mb-2">{CLINIC_INFO.subtitle}</p>
          <p className="text-sm opacity-80">{CLINIC_INFO.address}</p>
          <p className="text-sm opacity-80">{CLINIC_INFO.cityStateZip}</p>
          <p className="text-sm opacity-80 mt-4">{CLINIC_INFO.phone}</p>
          <p className="text-sm opacity-80 mt-2">{CLINIC_INFO.hours}</p>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-4">Services</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {SERVICES.map(category => (
              <li key={category.id}>
                <span className="font-semibold block mb-1">{category.category}</span>
                <ul className="pl-4 space-y-1">
                  {category.items.slice(0, 3).map(item => (
                    <li key={item.id}>
                      <Link to={`/littleton/${item.id}`} className="hover:underline">{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-4">Service Areas</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {NEIGHBORHOODS.map(neighborhood => (
              <li key={neighborhood.id}>
                <Link to={`/${neighborhood.id}`} className="hover:underline">{neighborhood.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-4">Ready to GLO?</h4>
          <a 
            href={CLINIC_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#fdf7d1] text-[#1a1a1a] px-6 py-3 rounded-full text-sm font-medium hover:bg-white transition-colors"
          >
            Book Consultation
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-xs opacity-60 text-center">
        &copy; {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.
      </div>
    </footer>
  );
}
