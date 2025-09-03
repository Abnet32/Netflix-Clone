import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import hero_banner from "../../assets/cukurr.webp";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {

  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="hero_banner" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="hero_title" className="caption-img" />
          <p>
            When a mafia family named Koçovars are in danger of losing control
            of their neighborhood, “The Pit,” their youngest son must come back
            home, a place he could never truly escape.
          </p>
          <div className="hero-btns">
            <button
              className="btn"
              onClick={() =>
                window.open(
                  `https://www.youtube.com/embed/g3GoD22e5gM?si=ay6974bB5VT8ScxY`,
                  "_blank"
                )
              }
            >              
              <img src={play_icon} alt="play_icon" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="info_icon" />
              More Info
            </button>
          </div>
          <TitleCards title={"Now Playing"} category={"now_playing"} />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Popular"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Rated"} category={"top_rated"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
