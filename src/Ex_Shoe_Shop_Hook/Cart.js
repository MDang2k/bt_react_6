import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  let { cart } = useSelector((state) => {
    return state.shoeReducer;
  });

  console.log("cart ", cart);

  let renderTbody = () => {
    return cart.map((item) => {
      return (
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <button className="btn btn-danger">-</button>
            <span>{item.soLuong}</span>
            <button className="btn btn-success">+</button>
          </td>
          <td>{item.price * item.soLuong}</td>
          <td>
            <img src={item.image} style={{ width: 80 }} />
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      );
    });
  };
  
  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Img</th>
            </tr>
          </thead>

          <tbody>{renderTbody()}</tbody>
        </table>
      </div>
    </div>
  );
}
