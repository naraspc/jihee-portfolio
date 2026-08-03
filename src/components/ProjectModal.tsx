import { useEffect } from 'react';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) {
          onClose();
        }
      }}
    >
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div className="project-modal__header">
          <div>
            <p className="eyebrow">
              {project.year} · {project.category}
            </p>
            <h2 id="project-modal-title">{project.title}</h2>
          </div>

          <button
            className="modal-close"
            type="button"
            onClick={onClose}
            aria-label="프로젝트 상세 닫기"
          >
            Close ×
          </button>
        </div>

        <div className="project-modal__intro">
          <p className="project-modal__description">
            {project.description.split('\n').map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>

          <dl className="project-meta">
            {project.client && (
              <>
                <dt>Client</dt>
                <dd>{project.client}</dd>
              </>
            )}

            {project.duration && (
              <>
                <dt>Period</dt>
                <dd>{project.duration}</dd>
              </>
            )}

            {project.contribution && (
              <>
                <dt>Role</dt>
                <dd>{project.contribution}</dd>
              </>
            )}

            <dt>Tools</dt>
            <dd>{project.tools.join(' · ')}</dd>
          </dl>
        </div>

        <div className="project-modal__gallery">
          {project.images.map((image, index) => (
            <figure key={image}>
              <img
                src={image}
                alt={`${project.title} 포트폴리오 자료 ${index + 1}`}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
