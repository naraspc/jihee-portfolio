import { profile } from '../data/portfolio';

export function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="처음으로 이동">
        JH<span>.</span>
      </a>

      <nav className="main-nav" aria-label="주요 메뉴">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
