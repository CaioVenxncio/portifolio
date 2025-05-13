import React, { useEffect, useState } from 'react';

const AboutMe = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch('/data/about_me_data.json')
      .then(response => response.json())
      .then(data => setAboutData(data))
      .catch(error => console.error('Error fetching about me data:', error));
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return (
    <section id="about" className="py-20 px-8 bg-gray-800 text-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Sobre Mim</h2>
        <div className="text-lg text-gray-300 whitespace-pre-line">
          {aboutData.summary}
        </div>
        {aboutData.location && (
          <p className="mt-8 text-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline-block mr-2">
              <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.145l.002-.001L10 18.43l.001.001.002.001.006.003.018.008a5.741 5.741 0 00.281-.145l.002-.001c.215-.126.434-.26.65-.404L10 17.38l.001.001c.215-.126.434-.26.65-.404l.004-.002a6.984 6.984 0 001.083-.882l.002-.002a6.006 6.006 0 00.949-.949l.002-.002a6.984 6.984 0 00.882-1.083l.002-.004c.144-.216.278-.435.404-.65l.001-.002L15.57 10l-.001-.001c.144-.216.278-.435.404-.65l.002-.004a6.984 6.984 0 00.882-1.083l.002-.002a6.006 6.006 0 00.949-.949l.002-.002a6.984 6.984 0 00.882-1.083l.004-.002c.126-.215.26-.434.404-.65l.002-.001L10 1.57l-.001-.001c-.126-.215-.26-.434-.404-.65l-.004-.002a6.984 6.984 0 00-1.083-.882l-.002-.002a6.006 6.006 0 00-.949-.949l-.002-.002a6.984 6.984 0 00-1.083-.882l-.002-.004a5.741 5.741 0 00-.65-.404l-.001-.002L4.43 10l.001.001c-.144.216-.278.435-.404.65l-.002.004a6.984 6.984 0 00-.882 1.083l-.002.002a6.006 6.006 0 00-.949.949l-.002.002a6.984 6.984 0 00-.882 1.083l-.004.002c-.126.215-.26.434-.404.65l-.002.001.002.001.005.003.018.008a5.741 5.741 0 00.281.145l.002.001L10 18.43l-.001-.001-.002-.001-.006-.003-.018-.008a5.741 5.741 0 00-.281.145l-.002.001zm-.119-2.409a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
            </svg>
            {aboutData.location}
          </p>
        )}
      </div>
    </section>
  );
};

export default AboutMe;

