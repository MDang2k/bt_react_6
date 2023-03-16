import React from "react";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "./redux/constants/shoeConstants";

export default function ItemShoe({ item }) {
  let dispatch = useDispatch();

  let handleAddToCart = (item) => {
    dispatch({
      type: ADD_TO_CART,
      payload: item,
    });
  };

  return (
    <div className="col-3 p-4">
      <div className="card ">
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.price}</p>
          <a
            onClick={() => {handleAddToCart(item)}}
            href="#"
            className="btn btn-primary"
          >
            Add to card
          </a>
        </div>
      </div>
    </div>
  );
}
