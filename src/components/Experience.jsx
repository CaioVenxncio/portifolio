import React, { useEffect, useState } from 'react';

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    fetch('/data/experience_data.json')
      .then(response => response.json())
      .then(data => setExperienceData(data))
      .catch(error => console.error('Error fetching experience data:', error));
  }, []);

  if (!experienceData.length) {
    return <div>Loading experience...</div>;
  }

  return (
    <section id="experience" className="py-20 px-8 bg-gray-800 text-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-16 text-center">Experiência Profissional</h2>
        <div className="relative border-l-2 border-blue-500 pl-10 space-y-12">
          {experienceData.map((job, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[4.2rem] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-800"></div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-blue-400">{job.title}</h3>
                <p className="text-xl text-gray-300 mb-1">{job.companyName}</p>
                <p className="text-sm text-gray-500 mb-3">
                  {job.start.month && job.start.year ? `${String(job.start.month).padStart(2, '0')}/${job.start.year}` : job.start.year}
                  {' - '}
                  {job.end && (job.end.month || job.end.year) ? 
                    (job.end.month && job.end.year ? `${String(job.end.month).padStart(2, '0')}/${job.end.year}` : job.end.year) 
                    : 'Present'}
                  {' | '}{job.location}
                </p>
                <p className="text-gray-400 whitespace-pre-line text-sm">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
