import "./style.scss";
import logo from "../../assets/media/logo-svg.svg";
import { HEADER_TEXTS } from "../../constants/constants";

export default function Header() {
  return (
    <header>
      <div className="container__header_left_content">
        <div className="container__logotype_header">
          <img src={logo} alt={HEADER_TEXTS.logoAlt} />
        </div>
        <nav>
          <div className="navigation__main_container">
            <div className="navigation__link">
              <a href="#">{HEADER_TEXTS.links.about}</a>
            </div>
            <div className="navigation__link">
              <a href="#">{HEADER_TEXTS.links.process}</a>
            </div>
            <div className="navigation__link">
              <a href="#">{HEADER_TEXTS.links.results}</a>
            </div>
            <div className="navigation__link">
              <a href="#">{HEADER_TEXTS.links.contacts}</a>
            </div>
          </div>
        </nav>
      </div>
      <div className="container__header_right_content">
        <div className="container__buttons_panel">
          <button className="button__main_content-empty">{ HEADER_TEXTS.header.login}</button>
          <button className="button__main_content-green">{ HEADER_TEXTS.header.booking}</button>
        </div>
      </div>
    </header>
  );
}
