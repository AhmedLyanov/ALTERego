import './style.scss'

export default function succesfull_course_list() {
  const courseStats = [
    {
      value: "1200+",
      description: "Выпускников",
    },
    {
      value: "87%",
      description: "Трудоустроились",
    },
    {
      value: "92%",
      description: "Довольны обучением",
    },
    {
      value: "45+",
      description: "Компаний-партнеров",
    },
  ];

  return (
    <div className="container_list_succesfull">
      <div className="text_container__succesfull_list">
        {courseStats.map((course, index) => (
          <div className="container__text_data_succesfull_list" key={index}>
            <h4>{course.value}</h4>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
