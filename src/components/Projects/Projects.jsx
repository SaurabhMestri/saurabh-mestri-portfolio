// src/components/Projects/Projects.jsx
import Tilt from "react-parallax-tilt";
import { projects } from "../../utils/data";

// Example project data

const Projects = () => {

  
  return (

    <section
      id="projects"
      className="px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of my development work, including web apps, APIs, and tools built with modern technologies.
        </p>
      </div>

      {/* Project Cards */}
      <div className="flex flex-wrap gap-5 py-10 justify-between">
        {projects.map((project) => (
          <Tilt
            key={project.name}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className="w-full sm:w-[48%]"
          >
            <div className="bg-gray-900 backdrop-blur-md px-6 sm:px-8 py-8 sm:py-6 mb-10 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-4 text-center">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base text-center mb-4">
                {project.description}
              </p>
              <p className=" text-sm text-gray-500 text-center mb-4">
                Language:  {project.tags.map((data)=> (
                  <span key={data.id} className="font-medium text-gray-300">
                    {data}{" "}
                  </span>
                ))}
              </p>
              <div className="flex justify-center">
                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-[#8245ec] text-white rounded-lg hover:bg-[#6b2dd9] transition-colors"
                >
                  🔗 Github Link
                </a>
                
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}


export default Projects;
