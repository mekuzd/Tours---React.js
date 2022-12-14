import React, { useState } from "react";

const Tour = ({ id, name, price, info, image, removetour }) => {
  const [readmore, setreadmore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readmore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setreadmore(!readmore)}>
            {readmore ? "show less" : "show more"}
          </button>
        </p>
        <button onClick={() => removetour(id)} className="delete-btn">
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
