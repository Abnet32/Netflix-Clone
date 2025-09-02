import { useRef, useEffect } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";

const TitleCards = () => {
  

   const cardsRef = useRef(null);

   const handleWheel = (event) => {
     event.preventDefault();
     cardsRef.current.scrollLeft += event.deltaY; // ✅ fixed typo
   };

   useEffect(() => {
     const container = cardsRef.current;
     if (container) {
       container.addEventListener("wheel", handleWheel, { passive: false });
     }

     // ✅ cleanup
     return () => {
       if (container) {
         container.removeEventListener("wheel", handleWheel);
       }
     };
   }, []);

  return (
    <div className="titlecards">
      <h2>Popular on Netflix</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt={card.name} />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
