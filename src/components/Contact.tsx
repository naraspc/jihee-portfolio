import { profile } from '../data/portfolio';

export function Contact() {
  return (
    <footer className="contact" id="contact">
      <p className="eyebrow">CONTACT</p>
      <h2>
        새로운 공간과 경험을
        <br />
        함께 만들어갑니다.
      </h2>

      <a className="contact__email" href={`mailto:${profile.email}`}>
        {profile.email}
        <span aria-hidden="true">↗</span>
      </a>

      <div className="contact__footer">
        <span>© 2026 Hwang Ji Hee</span>

        <span className="contact__credit">
          Designed by{' '}
          <a href={`mailto:${profile.email}`} aria-label="황지희에게 이메일 보내기">
            Jihee
          </a>
          {' · '}
          Developed by{' '}
          <a
            href="https://github.com/naraspc"
            target="_blank"
            rel="noreferrer"
            aria-label="김진욱 GitHub 새 창에서 열기"
          >
            Jinwook
          </a>
        </span>
      </div>
    </footer>
  );
}
