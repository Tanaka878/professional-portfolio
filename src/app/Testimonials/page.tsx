'use client'
import React from 'react';
import Image from 'next/image';

interface Testimonial {
  text: string;
  image: string;
  name: string;
  title: string;
  rating: 1 | 2 | 3 | 4 | 5; 
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      text: "Working with Tanaka was an incredible experience. Their attention to detail and problem-solving skills are truly exceptional. They consistently deliver high-quality work that exceeds expectations.",
      image: '/Images/headshot1.jpeg',
      name: 'Tafadzwa Murwira',
      title: 'Entreprenuer',
      rating: 4
    },
    {
      text: "I've collaborated with many professionals, but Tanaka's commitment to excellence stands out. Their innovative approach and ability to tackle complex challenges made our project a huge success.",
      image: '/Images/headshot2.jpeg',
      name: 'Mark',
      title: 'Freelancer',
      rating: 5
    },
    {
      text: "Exceptional communication, technical expertise, and a proactive mindset. Tanaka doesn't just complete tasks; they elevate the entire project with their strategic thinking and creativity.",
      image: '/Images/headshot3.jpeg',
      name: 'Blessing Katupira',
      title: 'MSU Student',
      rating: 5
    }
  ];

  const StarRating: React.FC<{ rating: 1 | 2 | 3 | 4 | 5 }> = ({ rating }) => (
    <div className="flex text-yellow-400 mb-2">
      {[...Array(5)].map((_, index) => (
        <svg 
          key={index} 
          className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  const displayTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="bg-[#0F172A] py-16 relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Client Testimonials</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Hear from professionals who have experienced my dedication, expertise, and collaborative approach.
        </p>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-33.33%);
          }
        }
        .scroll-container {
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
        }
        .infinite-scroll-1 {
          animation: scroll 30s linear infinite;
        }
        .infinite-scroll-2 {
          animation: scroll 40s linear infinite;
        }
        .infinite-scroll-3 {
          animation: scroll 35s linear infinite;
        }
        
        @media (min-width: 768px) {
          .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
        }
        
        @media (min-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      <div className="relative h-[500px] overflow-hidden scroll-container">
        <div className="testimonials-grid">
          {/* Responsive Columns */}
          {[1, 2, 3].map((colNum) => (
            <div 
              key={colNum} 
              className={`
                ${colNum === 1 ? 'infinite-scroll-1' : ''}
                ${colNum === 2 ? 'hidden md:block infinite-scroll-2' : ''}
                ${colNum === 3 ? 'hidden lg:block infinite-scroll-3' : ''}
                px-2
              `}
            >
              {displayTestimonials.map((testimonial, index) => (
                <div 
                  key={`col${colNum}-${testimonial.name}-${index}`} 
                  className="card bg-[#1E293B] p-6 rounded-lg shadow-lg mx-auto mb-6 border border-[#334155]"
                >
                  <StarRating rating={testimonial.rating} />
                  <p className="text-gray-300 mb-4 line-clamp-4 italic">&quot;{testimonial.text}&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        height={50}
                        width={50}
                        className="rounded-full h-12 w-12 object-cover border-2 border-[#334155]"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;