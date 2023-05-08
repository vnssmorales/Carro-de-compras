import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "./itemActions";

export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case AddProductCart:
      return [
        ...state, //el state es el objeto a modificar
        {
          product: action.payload, // el payload va a ser el objeto producto
          quantity: 1,
        },
      ];

    case UpdateQuantityProductCart:
      return  state.map((i) => {
        if (i.product.id === action.payload.id) { //action.payload es el objeto producto mas el id
          //preguntamos si el producto existe
         return {
            ...i,
            quantity: i.quantity + 1, //retornamos una nueva instancia
         };
        }
        return i; //map siempre devuelve el objeto modificado por lo que debe ir con return
      }) ;

    case DeleteProductCart:
      return [...state.filter((i) => i.product.id !== action.payload)];

    default:
      return state; //si no cae en ningun caso va a devolver el estado
  }
};
