import { useCallback, useMemo, useState } from 'react';
import { projects } from '../data/portfolio';
import type { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const years = useMemo(
    () => Array.from(new Set(projects.map((project) => project.year))),
    [],
  );

  const closeModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <>
      <section className="section projects" id="projects">
        <div className="section-heading">
          <p className="section-number">02</p>
          <h2>Selected Projects</h2>
        </div>

        <div className="year-index" aria-label="프로젝트 연도">
          {years.map((year) => (
            <span key={year}>{year}</span>
          ))}
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card ${index === 0 ? 'project-card--lead' : ''}`}
              key={project.id}
            >
              <button
                type="button"
                className="project-card__button"
                onClick={() => setSelectedProject(project)}
                aria-label={`${project.title} 프로젝트 상세 보기`}
              >
                <div className="project-card__image">
                  <img
                    src={project.images[0]}
                    alt=""
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                  <span className="project-card__open" aria-hidden="true">
                    View project ↗
                  </span>
                </div>

                <div className="project-card__caption">
                  <div>
                    <p>{project.category}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <span>{project.year}</span>
                </div>
              </button>
            </article>
          ))}
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={closeModal} />
    </>
  );
}
