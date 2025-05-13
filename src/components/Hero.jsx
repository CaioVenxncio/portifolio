import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    fetch('/data/home_data.json')
      .then(response => response.json())
      .then(data => setHomeData(data))
      .catch(error => console.error('Error fetching home data:', error));
  }, []);

  if (!homeData) {
    return <div>Loading...</div>;
  }

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-gray-900 text-white">
      <img 
        src={homeData.profile_picture_url}
        alt={homeData.name}
        className="w-48 h-48 rounded-full mb-8 border-4 border-blue-500 object-cover"
      />
      <h1 className="text-5xl font-bold mb-4">{homeData.name}</h1>
      <p className="text-2xl text-gray-400 mb-6">{homeData.headline}</p>
      <p className="text-lg max-w-2xl mx-auto">{homeData.short_presentation}</p>
    </section>
  );
};

export default Hero;
