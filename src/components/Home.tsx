import React from 'react';
import { Link } from 'react-router-dom';
import { CLINIC_INFO, NEIGHBORHOODS, SERVICES } from '../data';

export function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-8 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
          About Us
        </h1>
      </section>

      {/* About Section - Inspired by img1 */}
      <section className="max-w-[90rem] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-12 items-center">
        {/* Left Image (Arch) */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-[10rem]">
          <img 
            src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1000&auto=format&fit=crop" 
            alt="Healing crystals and candles" 
            className="object-cover w-full h-full"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Center Text */}
        <div className="text-center space-y-6 text-sm leading-relaxed max-w-xl mx-auto px-4">
          <h2 className="text-4xl font-serif mb-8">Let's get GLOing</h2>
          <p>
            At the Glo Alchemist, we are driven by a mission to educate, simplify skincare, provide product knowledge, heal and enhance one's own natural "Glo."
          </p>
          <p>
            We specialize in skincare and laser treatments, and our focus is offering progressive treatments that deliver tangible results.
          </p>
          <p>
            Guided by our values of safety, cleanliness in practice and products, and empowerment through education, we're dedicated to helping you achieve your skin care goals with confidence and clarity.
          </p>
          <p>
            Let's combine the forces of science, nature's ingredients, vintage and modern technique, and a little love and healing to create your very own GLO potion!
          </p>
        </div>

        {/* Right Image */}
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop" 
            alt="Woman with glowing skin" 
            className="object-cover w-full h-full"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 px-8 mt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif text-center mb-20">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {SERVICES.map((category) => (
              <div key={category.id} className="text-center">
                <h3 className="text-2xl font-serif mb-8 border-b border-black/10 pb-4 inline-block">{category.category}</h3>
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item.id}>
                      <Link 
                        to={`/littleton/${item.id}`} 
                        className="hover:underline underline-offset-4 decoration-1 text-sm tracking-wide"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-32 px-8 max-w-5xl mx-auto text-center border-t border-black/10">
        <h2 className="text-4xl font-serif mb-12">Proudly Serving</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {NEIGHBORHOODS.map((neighborhood) => (
            <Link 
              key={neighborhood.id}
              to={`/${neighborhood.id}`}
              className="px-6 py-3 border border-black/20 rounded-full text-sm hover:bg-black hover:text-[#fdf7d1] transition-colors"
            >
              {neighborhood.name}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
