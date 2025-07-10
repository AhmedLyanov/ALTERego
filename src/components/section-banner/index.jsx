import "./style.scss";
import complete from "../../assets/media/complete.svg";

export default function Section_Banner() {
  const advantages = [
    {
      title: "Практический подход",
      description: "80% обучения — практика на реальных проектах",
    },
    {
      title: "Опытные наставники",
      description: "Преподаватели из ведущих IT-компаний",
    },
    {
      title: "Трудоустройство",
      description: "Помощь в составлении резюме и подготовке к интервью",
    },
    {
      title: "Гибкий график",
      description: "Обучение в удобное время, доступ к материалам 24/7",
    },
  ];

  return (
    <section>
      <div className="container__hero-banner_section">
        <div className="hero-banner_content">
          <div className="hero-banner__text-information">
            <div className="container__hero-banner-title__decription">
              <div className="title__hero_banner">
                <h1>
                  <span className="title__span-hero-banner-part-1">
                    Профессия
                  </span>{" "}
                  <span className="title__span-hero-banner-part-2">
                    Fullstack-разработчик
                  </span>
                </h1>
              </div>
              <div className="description__hero_banner">
                <p>
                  Освойте востребованную профессию с нуля и начните карьеру в
                  IT. Программа разработана экспертами ведущих компаний для
                  быстрого старта в индустрии.
                </p>
              </div>
            </div>
            <div className="container__bottom_content_hero-banner">
              <div className="main_container__buttons-hero-banner">
                <button className="button__hero-banner-primary">
                  Записаться на курс
                </button>
                <button className="button__hero-banner-secondary">
                  Узнать подробнее
                </button>
              </div>
              <div className="bottom__panel-hero-banner">
                <div className="panel__advantages">
                  <h2>Ключевые преимущества</h2>
                  <div className="container__panel_advantages-list">
                    {advantages.map((advantage, index) => (
                      <div className="card__advantage" key={index}>
                        <div className="container__advantage-image">
                          <img src={complete} alt="Complete logo" />
                        </div>
                        <div className="container__advantage_description">
                          <span className="title__card-advantage">
                            {advantage.title}
                          </span>
                          <span className="description__card-advantage">
                            {advantage.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="panel__price_educational">
                  <div className="panel_price__text_information">
                    <h2>Стоимость обучения</h2>
                    <div className="container__price_counter">
                      <div className="active__price">
                        <span>75 000 ₽</span>
                      </div>
                      <div className="no_active__price">
                        <span>90 000 ₽</span>
                      </div>
                    </div>
                    <div className="notes__price_counter">
                      <span>Рассрочка от 6 250 ₽/мес</span>
                    </div>
                  </div>
                  <div className="button__panel_price">
                    <button className="button_price_panel__set_request">Оформить заявку</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-banner_image">
          <picture>
            <div className="background-hero_banner_image"></div>
          </picture>
        </div>
      </div>
    </section>
  );
}
