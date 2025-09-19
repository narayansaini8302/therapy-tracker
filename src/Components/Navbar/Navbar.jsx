import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Orthopedic Physiotherapy",
      distance: "1.2 km",
      rating: 4.8,
      reviews: 124,
      address: "123 Health Street, Jaipur",
      availability: "Available Today",
      shadowColor: "blue"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Sports Injury Rehabilitation",
      distance: "2.5 km",
      rating: 4.9,
      reviews: 98,
      address: "456 Wellness Avenue, Jaipur",
      availability: "Available Tomorrow",
      shadowColor: "purple"
    },
    {
      id: 3,
      name: "Dr. Priya Sharma",
      specialty: "Neurological Physiotherapy",
      distance: "0.8 km",
      rating: 4.7,
      reviews: 87,
      address: "789 Therapy Road, Jaipur",
      availability: "Available Today",
      shadowColor: "pink"
    },
    {
      id: 4,
      name: "Dr. Robert Kim",
      specialty: "Geriatric Physiotherapy",
      distance: "3.1 km",
      rating: 4.6,
      reviews: 112,
      address: "101 Care Boulevard, Jaipur",
      availability: "Available Next Week",
      shadowColor: "blue"
    }
  ]);

//   // Effect for dynamic shadow effects
//   useEffect(() => {
//     const cards = document.querySelectorAll('.cursor-shadow');
    
//     const handleMouseMove = (e) => {
//       const x = e.clientX;
//       const y = e.clientY;
      
//       cards.forEach(card => {
//         const rect = card.getBoundingClientRect();
//         const cardX = rect.left + rect.width / 2;
//         const cardY = rect.top + rect.height / 2;
        
//         const angleX = (cardY - y) / 20;
//         const angleY = (x - cardX) / 20;
        
//         const shadowX = (x - cardX) / 25;
//         const shadowY = (y - cardY) / 25;
        
//         // Add transform effect
//         card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        
//         // Add shadow effect based on cursor position
//         const shadowColor = card.getAttribute('data-shadow-color') || 'blue';
//         let shadowValue;
        
//         if (shadowColor === 'blue') {
//           shadowValue = `${shadowX}px ${shadowY}px 15px rgba(59, 130, 246, 0.4)`;
//         } else if (shadowColor === 'purple') {
//           shadowValue = `${shadowX}px ${shadowY}px 15px rgba(139, 92, 246, 0.4)`;
//         } else {
//           shadowValue = `${shadowX}px ${shadowY}px 15px rgba(236, 72, 153, 0.4)`;
//         }
        
//         card.style.boxShadow = shadowValue;
//       });
//     };
    
//     const handleMouseLeave = () => {
//       cards.forEach(card => {
//         card.style.transform = '';
//         card.style.boxShadow = '';
//       });
//     };
    
//     // Add event listeners
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseleave', handleMouseLeave);
    
//     // Clean up event listeners
//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Search functionality would go here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Navbar */}
      <nav className="bg-gray-800 border-b border-gray-700 py-3 px-6 md:px-12 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-3 glow-effect">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-xl font-bold text-white">CodeRED_LIGHT</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-blue-400 font-medium hover:text-blue-300 transition">Home</a>
            <a href="#" className="text-gray-400 font-medium hover:text-blue-400 transition">Doctors</a>
            <a href="#" className="text-gray-400 font-medium hover:text-blue-400 transition">Services</a>
            <a href="#" className="text-gray-400 font-medium hover:text-blue-400 transition">About</a>
            <a href="#" className="text-gray-400 font-medium hover:text-blue-400 transition">Contact</a>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-5">
            <div className="hidden md:block relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 w-64 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="p-2 rounded-full hover:bg-gray-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <button className="flex items-center space-x-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-semibold">L</span>
                </div>
                <span className="hidden md:inline text-gray-300 font-medium">Login</span>
              </button>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md text-gray-400 hover:bg-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 px-6 pt-3 pb-5 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-blue-400 font-medium py-2">Home</a>
              <a href="#" className="text-gray-400 font-medium py-2">Doctors</a>
              <a href="#" className="text-gray-400 font-medium py-2">Services</a>
              <a href="#" className="text-gray-400 font-medium py-2">About</a>
              <a href="#" className="text-gray-400 font-medium py-2">Contact</a>
            </div>
            
            <div className="mt-4 relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 w-full bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        )}
      </nav>

      {/* Modern Search Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 relative z-10">
        <div className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-xl p-6 md:p-8 border border-gray-700">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Find Nearest Physiotherapy Doctors</h1>
          <p className="text-gray-400 mb-6">Search for specialized physiotherapists near your location</p>
          
          {/* Search Bar */}
          <div className="bg-gray-900 bg-opacity-60 rounded-xl p-6 mb-8 border border-blue-500 border-opacity-30 transition-all hover:border-opacity-50">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, specialty, or condition..."
                  className="pl-10 pr-4 py-3 w-full bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 border-none outline-none transition"
                />
              </div>
              <div className="relative md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value="Jaipur 302006"
                  readOnly
                  className="pl-10 pr-4 py-3 w-full bg-gray-800 border border-gray-700 text-gray-400 rounded-lg cursor-not-allowed"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition font-medium flex items-center justify-center shadow-lg hover:shadow-blue-500/25"
              >
                Search Doctors
              </button>
            </form>
          </div>
          
          {/* Results Section */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Available Physiotherapists</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {doctors.map(doctor => (
                <div 
                  key={doctor.id} 
                  className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg p-6 border border-gray-700 transition-all duration-300 cursor-shadow hover:border-blue-500 hover:border-opacity-30"
                  data-shadow-color={doctor.shadowColor}
                >
                  <div className="flex items-start">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-4">
                      <span className="text-white font-semibold text-xl">{doctor.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-semibold text-white">{doctor.name}</h3>
                        <span className="px-2 py-1 bg-green-900 text-green-300 text-xs rounded-full">
                          {doctor.availability}
                        </span>
                      </div>
                      <p className="text-gray-400">{doctor.specialty}</p>
                      <div className="flex items-center mt-2">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-gray-300 font-medium">{doctor.rating}</span>
                          <span className="text-gray-500 ml-1">({doctor.reviews} reviews)</span>
                        </div>
                        <span className="mx-2 text-gray-600">•</span>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-gray-400">{doctor.distance} away</span>
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm mt-2">{doctor.address}</p>
                      
                      <div className="mt-4 pt-4 border-t border-gray-700 flex space-x-3">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm">
                          Book Appointment
                        </button>
                        <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition font-medium text-sm">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .glow-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: inherit;
          opacity: 0;
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        
        .glow-effect:hover::after {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Navbar;