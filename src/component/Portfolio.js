import { Link } from 'react-router-dom';

function Portfolio(props) {
  return (
    <section id={props.id} className={props.cls}>
      <div className="p-5">
        <h2>📁 포트폴리오</h2>
        <ul>
          <li>
            <Link to="/portfolio/pass" className="text-blue-500 underline">
              서든어택 시즌패스 클론페이지 보러가기 →
            </Link>
          </li>
          <li>
            <Link to="/portfolio/event" className="text-blue-500 underline">
             이벤트 페이지 보러가기 →
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
