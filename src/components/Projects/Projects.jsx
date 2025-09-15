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
        <h2 className="text-3xl sm:text-4xl font-bolt">PROJECTS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className=" text-lg font-semibold">
          A showcase of my development work, including web apps, APIs, and tools built with modern technologies.
        </p>
      </div>

      {/* Project Cards */}

      <div className="flex flex-wrap gap-5 py-10 justify-between">

        {projects.map((project) => (
          <div key={project.title} className="w-full sm:w-[48%] flex">
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1000}
                gyroscope={true}
              >
              <div className=" backdrop-blur-md px-6 sm:px-8 py-8 sm:py-6 mb-10 
                      rounded-2xl border border-white 
                      shadow-[0_0_20px_2px_rgba(130,69,236,2)] 
                      flex flex-col justify-between h-full w-full">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold  mb-4 text-center">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-center mb-4">
                    {project.description}
                  </p>
                  <p className="text-sm  text-center mb-4">
                    Language:&nbsp;
                    {project.tags.map((tag) => (
                      <span key={tag.id} className="font-medium t">
                        {tag}{" "}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="flex justify-center mt-auto">
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 bg-[#8245ec] text-white rounded-lg hover:bg-[#6b2dd9] transition-colors"
                  >
                    🔗 Live Link
                  </a>
                </div>
              </div>
          </Tilt>
            </div>
        ))}
      </div>
    </section>
  );
}


export default Projects;
