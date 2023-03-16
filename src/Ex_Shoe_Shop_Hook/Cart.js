import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {CHANGE_QUANTITY, DELETE_ITEM} from "./redux/constants/shoeConstants"

export default function Cart() {
  let { cart } = useSelector((state) => {
    return state.shoeReducer;
  });

  let dispatch = useDispatch();

  let handleDeleteItem = (item) => {
    dispatch({
      type: DELETE_ITEM,
      payload: item,
    });
  };

  let handleChangeQuantity = (item, change) => {
    dispatch({
      type: CHANGE_QUANTITY,
      payload: {
        item, change
      },
    });
  };

  console.log("cart ", cart);

  let renderTbody = () => {
    return cart.map((item) => {
      return (
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <button onClick={() => {handleChangeQuantity(item, -1)}} className="btn btn-danger">-</button>
            <span>{item.soLuong}</span>
            <button onClick={() => {handleChangeQuantity(item, 1)}} className="btn btn-success">+</button>
          </td>
          <td>{item.price * item.soLuong}</td>
          <td>
            <img src={item.image} style={{ width: 80 }} />
          </td>
          <td>
            <button 
            onClick={() => {handleDeleteItem(item)}}
            className="btn btn-danger">Delete</button>
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
