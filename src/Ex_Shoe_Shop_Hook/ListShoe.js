import React from "react";
import { useSelector } from "react-redux";
import ItemShoe from "./ItemShoe";

export default function ListShoe() {
  let { listShoe } = useSelector((state) => {
    return state.shoeReducer;
  });

  let renderShoeList = () => {
    return listShoe.map((shoe) => {
      return <ItemShoe item={shoe} />;
    });
  };

  return (
    <div>
      <div className="row">{renderShoeList()}</div>
    </div>
  );
}
