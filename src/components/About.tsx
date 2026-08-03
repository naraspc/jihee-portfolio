import {
  certificates,
  education,
  experience,
  profile,
  skills,
} from '../data/portfolio';

export function About() {
  return (
    <section className="section about" id="about">
      <div className="section-heading">
        <p className="section-number">01</p>
        <h2>About</h2>
      </div>

      <div className="about__lead">
        <div className="portrait-frame">
          <img
            src="/images/profile/jihee-v2.webp"
            alt="디자이너 황지희 프로필"
          />
        </div>

        <div className="about__copy">
          <p className="eyebrow">HWANG JI HEE · INTERIOR DESIGNER</p>

          <p className="about__statement">
            작은 경험이 모여 <strong>보다 좋은 디자인</strong>을 만든다고 믿습니다.
            <br className="about__line-break" />
            공간이 주는 가치를 고민하고, 사람들의 경험을 바꿀 수 있는
            <br className="about__line-break" />
            디자이너가 되기 위해 꾸준히 커리어를 이어가고 있습니다.
          </p>

          <div className="about__contact">
          <span>Contact</span>
          <span className="text-email">{profile.email}</span>
          </div>

        </div>
      </div>

      <div className="about__details">
        <article className="info-block">
          <p className="info-block__label">Education</p>
          {education.map((item) => (
            <div className="compact-row" key={item.title}>
              <span>{item.title}</span>
              <time>{item.period}</time>
            </div>
          ))}
        </article>

        <article className="info-block info-block--wide">
          <p className="info-block__label">Experience</p>
          <div className="timeline">
            {experience.map((item) => (
              <div className="timeline__item" key={item.organization}>
                <time>{item.period}</time>
                <div>
                  <h4>{item.organization}</h4>
                  <p>{item.title}</p>
                  <ul>
                    {item.description.map((description) => (
                      <li key={description}>{description}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="info-block">
          <p className="info-block__label">Certificate</p>
          <ul className="plain-list">
            {certificates.map((certificate) => (
              <li key={certificate}>{certificate}</li>
            ))}
          </ul>
        </article>

        <article className="info-block">
          <p className="info-block__label">Skills</p>
          <ul className="skill-list">
            {skills.map((skill, index) => (
              <li key={skill}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {skill}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
