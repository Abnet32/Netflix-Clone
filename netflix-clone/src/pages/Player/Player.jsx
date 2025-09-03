import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiDtata, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDE0MDZhNzZhNTIyY2EzYTRiZjFlNTQ3YTZjZjRlZCIsIm5iZiI6MTc1NjU3NzAwNy44MDksInN1YiI6IjY4YjMzY2VmZmE5MzRkNDMwNzNjY2JiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aHN06TRlw4lQtiqjnNOK9JI4PuyLOVTy_kLlPYXjv8Q",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt="back_arrow_icon"
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiDtata.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        {/* <p>{apiDtata.published_at}</p> */}
        <p>
          {apiDtata.published_at
            ? new Date(apiDtata.published_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            : ""}
        </p>
        {/* <p>{apiDtata.published_at ? apiDtata.published_at.slice(0, 10) : ""}</p> */}

        <p>{apiDtata.name}</p>
        <p>{apiDtata.type}</p>
      </div>
    </div>
  );
};

export default Player;
