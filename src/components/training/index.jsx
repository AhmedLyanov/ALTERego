import "./style.scss";
import training_checkmark from "../../assets/media/background-training-svg.svg";
import tutor_anna from "../../assets/media/tutor-anna.png";
import tutor_elena from "../../assets/media/tutor-elena.png";
import tutor_maria from "../../assets/media/tutor-maria.png";
import default_avatar from "../../assets/media/male.png";
import dotted_line from "../../assets/media/big-dotted-line.svg";
import dotted_type_2 from "../../assets/media/big-dotted-svg-type-2.svg";
import dotted_type_3 from "../../assets/media/big-dotted-svg-type-3.svg";

export default function Training() {
  const tutors = [
    {
      id: 1,
      name: "Анна Ивановна Сидорова",
      discipline: "Frontend разработка (React, Angular, Vue.js)",
      experience: "8 лет. Работала в компании 'ExampleTech'",
      achievements:
        "Разработала несколько крупных веб-приложений, автор курса по React для начинающих. Участвовала в Open Source проектах. Постоянно внедряет новые технологии и подходы в учебный процесс.",
      avatar: tutor_anna,
      reviews: [
        {
          id: 1,
          author: "Иван Смирнов",
          rating: 5,
          text: "Анна Ивановна объясняет сложные концепции очень доступно. Благодаря ей я освоил React и теперь могу создавать современные интерфейсы. Очень отзывчивая и всегда готова помочь. Дает практические советы, которые пригождаются в работе.",
        },
      ],
    },
    {
      id: 2,
      name: "Елена Сергеевна Петрова",
      discipline: "Backend разработка (Node.js, Python/Django, Java/Spring)",
      experience:
        "12 лет. Backend Developer в крупном банке, архитектор в IT-стартапе.",
      achievements:
        "Разработала высоконагруженные API для нескольких проектов. Имеет сертификаты по AWS и Azure. Активно использует DevOps практики.",
      avatar: tutor_elena,
      reviews: [
        {
          id: 1,
          author: "Надя Шивченко",
          rating: 5,
          text: "Елена Сергеевна объясняет сложные вещи очень понятно и на конкретных примерах. Ее занятия помогли мне освоить backend разработку с нуля. Строгий, но справедливый преподаватель. Дает очень полезные знания и навыки.",
        },
      ],
    },
    {
      id: 3,
      name: "Мария Константиновна Орлова",
      discipline: "images/Базы данных и системное администрирование",
      experience:
        "5 лет в качестве DevOps инженера и администратора баз данных.",
      achievements:
        "Сертифицированный администратор баз данных, активно занимается автоматизацией инфраструктуры. Разработала систему мониторинга для учебной лаборатории.",
      avatar: tutor_maria,
      reviews: [
        {
          id: 1,
          author: "Дмитрий Соколов",
          rating: 5,
          text: "Мария Константиновна прекрасно объясняет сложные темы, связанные с базами данных. Благодаря ее знаниям, я научился администрированию и настройке серверов. Всегда готова прийти на помощь, если что-то не получается. Очень терпеливый и внимательный преподаватель.",
        },
      ],
    },
    
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`star${i < rating ? "-filled" : ""}`}>
            {i < rating ? "★" : "☆"}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="main_section__training-chapter">
      <div className="main__content-training">
        <div className="container__title_training">
          <h3 className="title__training">О курсе</h3>
          <div className="container__background_svg">
            <img src={training_checkmark} alt="background checkmark" />
          </div>
        </div>

        <div className="main_content__flex">
          <div className="tutors-section">
            <div className="container_cards__tutors_list">
              {tutors.map((tutor, index) => (
                <div
                  className="tutor__wrapper"
                  key={`tutor-wrapper-${tutor.id}`}
                >
                  <div className="tutor__card" key={`tutor-${tutor.id}`}>
                    <div className="container__avatar_tutor">
                      <picture>
                        <img
                          src={tutor.avatar}
                          alt={`Аватар ${tutor.name}`}
                          width={128}
                          height={128}
                        />
                      </picture>
                    </div>

                    <div className="text__information__tutor">
                      <div className="name__tutor">
                        <span>{tutor.name}</span>
                      </div>

                      <div className="bottom__information_tutor">
                        <div className="discipline__tutor">
                          <span>Дисциплина: {tutor.discipline}</span>
                        </div>
                        <div className="experiance__tutor">
                          <span>Опыт: {tutor.experience}</span>
                        </div>
                        <div className="achievements__tutor">
                          Достижения: {tutor.achievements}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tutor-reviews">
                    {tutor.reviews.map((review) => (
                      <div
                        key={`review-${tutor.id}-${review.id}`}
                        className={`review-card review-variant-${index}`}
                      >
                        <div className="review-header">
                          <div className="review-author-info">
                            <div className="review-avatar">
                              <img
                                src={default_avatar}
                                alt={`Аватар ${review.author}`}
                                width={32}
                                height={32}
                              />
                            </div>
                            <div className="rating__comment_sender">
                              <span className="review-author">
                                {review.author}
                              </span>
                              <StarRating rating={review.rating} />
                            </div>
                          </div>
                        </div>
                        <p className="review-text">{review.text}</p>

                        {index === 0 && (
                          <div className="background__dotterline">
                            <img src={dotted_line} alt="connector" />
                          </div>
                        )}

                        {index === 1 && (
                          <div className="container_background__dotted_lines">
                            <img src={dotted_type_2} alt="left connector" />
                            <img src={dotted_type_3} alt="right connector" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}