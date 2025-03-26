import db from './db/db.json';

import Hd from './component/Hd';
import Banner from './component/Banner';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Preinterview from './component/Preinterview';
import Contact from './component/Contact';

function App() {
  return (
    <div className="syproject">
      <Hd datainfo={db.navi} id="hd"
      cls="fixed-top border-bottom bg-white"></Hd>
      <Banner datainfo={db.mainSlider} id="mainSlider" cls="vh-100"></Banner>
      <About id="about" cls="vh-100 bg-dark"></About>
      <Portfolio id="portfolio" cls="vh-100 bg-warning"></Portfolio>
      <Preinterview id="preInterview" datainfo={db.preinterview} cls="vh=100"></Preinterview>
      <Contact id="contact" cls="vh-100 bg-light"></Contact>
    </div>
  );
}

export default App;
