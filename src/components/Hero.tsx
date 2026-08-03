import { profile } from '../data/portfolio';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__content">
        <p className="eyebrow">INTERIOR DESIGN · 2023—2026</p>

        <h1 className="hero__title">
          <span className="hero__title-line">매일 한 걸음 더 나아가는,</span>

          <span className="hero__title-line">
            디자이너 <strong>황지희</strong>입니다.
          </span>
        </h1>

        <div className="hero__bottom">
          <p className="hero__role">{profile.title}</p>
          <a className="text-link" href="#projects">
            프로젝트 보기 <span aria-hidden="true">↘</span>
          </a>
        </div>
      </div>

      <div className="hero__ghost" aria-hidden="true">
        PORTFOLIO
      </div>
    </section>
  );
}
