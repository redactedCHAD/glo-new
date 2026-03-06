import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CLINIC_INFO, NEIGHBORHOODS, SERVICES, getAllServiceItems } from '../data';

export function ServiceAreaPage() {
  const { neighborhoodId, serviceId } = useParams();

  const neighborhood = NEIGHBORHOODS.find(n => n.id === neighborhoodId);
  const service = getAllServiceItems().find(s => s.id === serviceId);

  if (!neighborhood) {
    return <div className="p-24 text-center">Neighborhood not found</div>;
  }

  return (
    <main className="min-h-screen py-24 px-8 max-w-5xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="mb-12 text-sm opacity-60 flex gap-2 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <span>/</span>
        <Link to={`/${neighborhood.id}`} className="hover:underline">{neighborhood.name}</Link>
        {service && (
          <>
            <span>/</span>
            <span className="font-semibold">{service.name}</span>
          </>
        )}
      </nav>

      <section className="text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
          {service ? `${service.name} in ${neighborhood.name}` : `Skin Care Clinic in ${neighborhood.name}`}
        </h1>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed opacity-80 mb-12">
          {service 
            ? `Experience the best ${service.name.toLowerCase()} treatments near ${neighborhood.name}, CO. At ${CLINIC_INFO.name}, we combine science and nature to help you achieve your skin care goals.`
            : `Discover top-tier skin care and laser treatments near ${neighborhood.name}, CO. Our expert team at ${CLINIC_INFO.name} is dedicated to enhancing your natural glow.`
          }
        </p>
        <a 
          href={CLINIC_INFO.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-[#fdf7d1] px-8 py-4 rounded-full text-sm font-medium hover:bg-black/80 transition-colors"
        >
          Book Your Consultation
        </a>
      </section>

      {/* Content based on whether a service is selected */}
      {service ? (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl">
            <img 
              src={`https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1000&auto=format&fit=crop&seed=${service.id}`} 
              alt={`${service.name} treatment`} 
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-6 text-sm leading-relaxed">
            <h2 className="text-4xl font-serif mb-6">Why Choose Us for {service.name}?</h2>
            <p>
              Residents of {neighborhood.name} trust {CLINIC_INFO.name} for their {service.name.toLowerCase()} needs because we prioritize safety, cleanliness, and tangible results.
            </p>
            <p>
              Our clinic is conveniently located at {CLINIC_INFO.address}, {CLINIC_INFO.cityStateZip}, making it easily accessible from {neighborhood.name}.
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>Expert practitioners with years of experience</li>
              <li>State-of-the-art equipment and techniques</li>
              <li>Personalized treatment plans tailored to your skin</li>
              <li>A relaxing, healing environment</li>
            </ul>
          </div>
        </section>
      ) : (
        <section className="mb-24">
          <h2 className="text-4xl font-serif text-center mb-16">Our Services for {neighborhood.name} Residents</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {SERVICES.map((category) => (
              <div key={category.id} className="bg-white/30 p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-serif mb-6 border-b border-black/10 pb-4 inline-block">{category.category}</h3>
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item.id}>
                      <Link 
                        to={`/${neighborhood.id}/${item.id}`} 
                        className="hover:underline underline-offset-4 decoration-1 text-sm font-medium"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Location Details */}
      <section className="bg-[#1a1a1a] text-[#fdf7d1] p-12 rounded-3xl text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-serif mb-6">Visit Our Clinic</h2>
        <p className="mb-2 text-sm opacity-80">{CLINIC_INFO.name}</p>
        <p className="mb-2 text-sm opacity-80">{CLINIC_INFO.address}</p>
        <p className="mb-6 text-sm opacity-80">{CLINIC_INFO.cityStateZip}</p>
        <p className="mb-2 text-sm opacity-80">{CLINIC_INFO.phone}</p>
        <p className="mb-8 text-sm opacity-80">{CLINIC_INFO.hours}</p>
        <a 
          href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC_INFO.address + ' ' + CLINIC_INFO.cityStateZip)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-[#fdf7d1] text-[#fdf7d1] px-6 py-3 rounded-full text-sm hover:bg-[#fdf7d1] hover:text-[#1a1a1a] transition-colors"
        >
          Get Directions from {neighborhood.name}
        </a>
      </section>
    </main>
  );
}
