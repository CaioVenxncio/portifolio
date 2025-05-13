import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [githubOverview, setGithubOverview] = useState(null);

  useEffect(() => {
    fetch('/data/github_repositories_partial.json')
      .then(response => response.json())
      .then(data => setProjectsData(data))
      .catch(error => console.error('Error fetching projects data:', error));
    
    // Fetching basic GitHub profile info for the link to all repositories
    // Assuming github_profile_overview.txt was converted to a JSON or is manually parsed here
    // For simplicity, I'll hardcode the username for the repositories link
    setGithubOverview({ username: 'CaioVenxncio' }); 
  }, []);

  if (!projectsData.length && !githubOverview) {
    return <div>Loading projects...</div>;
  }

  return (
    <section id="projects" className="py-20 px-8 bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Projetos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.slice(0, 6).map((project, index) => ( // Show top 6 projects or adjust as needed
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">{project.name}</h3>
              {project.description && <p className="text-gray-400 mb-3 text-sm">{project.description || 'Descrição não disponível.'}</p>}
              <p className="text-gray-500 text-xs mb-1">Linguagem: {project.language || 'Não especificada'}</p>
              <p className="text-gray-500 text-xs mb-4">Última atualização: {project.updated_at}</p>
              <a 
                href={project.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-300 transition-colors duration-300 text-sm"
              >
                Ver no GitHub &rarr;
              </a>
            </div>
          ))}
        </div>
        {githubOverview && (
          <div className="text-center mt-12">
            <a 
              href={`https://github.com/${githubOverview.username}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Ver Todos os Repositórios no GitHub
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
