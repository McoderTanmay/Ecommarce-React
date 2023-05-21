import { Link } from "react-router-dom";
import "../css/items.css";
import { useState } from "react";

const Items = (props) => {
  const stwidth = { width: "20rem" };
  
  return (
    <>
      <div className="card me-2 mb-4 card-01" style={stwidth}>
        <Link to={'/SingleProduct/' + props.id}>
          <img
            src={props.thumbnail}
            className="card-img-top img"
            style={{ backgroundColor: "#f3f3f3" }}
            alt="..."
          />
        </Link>
        <div className="card-body">
          <p className="card-text fw-bold fs-5">{props.title}</p>
          <p className="card-text fw-bold fs-5">${props.price}</p>
        </div>
      </div>
    </>
  );
};

export default Items;
