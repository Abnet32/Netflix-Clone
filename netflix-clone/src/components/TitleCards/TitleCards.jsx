import { useRef, useEffect, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDE0MDZhNzZhNTIyY2EzYTRiZjFlNTQ3YTZjZjRlZCIsIm5iZiI6MTc1NjU3NzAwNy44MDksInN1YiI6IjY4YjMzY2VmZmE5MzRkNDMwNzNjY2JiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aHN06TRlw4lQtiqjnNOK9JI4PuyLOVTy_kLlPYXjv8Q",
    },
  };

  // const handleWheel = (event) => {3
  //   event.preventDefault();
  //   cardsRef.current.scrollLeft += event.deltaY; // ✅ fixed typo
  // };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category?category:"popular"}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    // const container = cardsRef.current;
    // if (container) {
    //   container.addEventListener("wheel", handleWheel, { passive: false });
    // }

    // ✅ cleanup
    // return () => {
    //   if (container) {
    //     container.removeEventListener("wheel", handleWheel);
    //   }
    // };
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path}
                alt={card.original_title}
              />
              <div className="card-title">
                <p>{card.original_title}</p>
              </div>{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
