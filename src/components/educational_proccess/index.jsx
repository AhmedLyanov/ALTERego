import "./style.scss";
import ClockSvg from "../../assets/media/Clock.svg";
import ButtonPlay from "../../assets/media/Circled Play Button.svg";
import Contacts from "../../assets/media/Contacts.svg";

export default function EducationalProcess() {
  const educational = [
    {
      image: ClockSvg,
      title: "Длительность",
      description: ["8 месяцев обучения", "20-25 часов в неделю"],
    },
    {
      image: ButtonPlay,
      title: "Формат",
      description: [
        "Онлайн-лекции в записи",
        "Еженедельные вебинары",
        "Практические задания"
      ],
    },
    {
      image: Contacts,
      title: "Поддержка",
      description: [
        "Персональный наставник",
        "Код-ревью от экспертов",
        "Сообщество студентов"
      ],
    },
  ];

  return (
    <section className="educational-process-container">
      <article className="educational-process-stats">
        {educational.map((process, index) => (
          <div className="educational-process-stat-item" key={index}>
            <picture>
              <img src={process.image} alt={process.title} />
            </picture>
            <h4>{process.title}</h4>
            <ul className="educational-process-description">
              {process.description.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </div>
        ))}
      </article>
    </section>
  );
}