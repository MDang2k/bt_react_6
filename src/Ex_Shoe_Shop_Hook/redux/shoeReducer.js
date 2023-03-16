import { dataShoe } from "../dataShoe";
import * as action from "./constants/shoeConstants";

const initialValue = {
  listShoe: dataShoe,
  cart: [],
};

export const shoeReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case action.ADD_TO_CART: {
      console.log("ADD", payload);

      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => {
        return item.id == payload.id;
      });

      if (index == -1) {
        let newShoe = { ...payload, soLuong: 1 };
        cloneCart.push(newShoe);
      } else {
        cloneCart[index].soLuong++;
      }

      return {
        ...state,
        cart: cloneCart,
      };
    }

    case action.DELETE_ITEM: {
      console.log("DELETE", payload);

      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => {
        return item.id == payload.id;
      });

      cloneCart.splice(index, 1);

      return {
        ...state,
        cart: cloneCart,
      };
    }

    case action.CHANGE_QUANTITY: {
      console.log("CHANGE", payload.item);

      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => {
        return item.id == payload.item.id;
      });

      console.log(cloneCart);
      if (payload.change == 1) {
        cloneCart[index].soLuong++
      } else {
        if (cloneCart[index].soLuong == 1) {
            cloneCart.splice(index, 1);
        } else {
            cloneCart[index].soLuong--
        }
      }
    
      
      return {
        ...state,
        cart: cloneCart,
      };
    }

    default:
      return state;
  }
};
