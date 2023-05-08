import { useEffect, useReducer } from "react";
import { CartView } from "../components/CartView";
import { CatalogView } from "../components/CatalogView";
import { itemsReducer } from "../reducer/itemsReducer";

//aca el getItem me devuelve un string y debo convertirlo a objeto nuevamente
//con JSON.parse que convierte un string a objeto
//la primera vez no existe por lo que hay que preguntarle con el operador ternario
//initialCartItems va a ser esto || si no un arreglo vacio
const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || []; //con get obtengo los valores 
//[
  // {
  //     product: {},
  //      quantity: 0,
  //     total: 0
  //  }
//];
export const CartApp = () => {
 
  const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

  useEffect(() => { //cuando hay un cambio en los items se gatilla el use Effect
    //para guardar el estado mientras la sesion este activa, el segundo parametro debe ser un string
    //por lo que debo convertir el objeto "items" en string con el metodo de js JSON.stringify
    //luego hay que inicializarlo en CartApp
    sessionStorage.setItem('cart',JSON.stringify(cartItems)); //con set modifico los valores
}, [cartItems]);

  const handlerAddProductCart = (product) => {
    //se actualiza el estado del carro

    const hasItem = cartItems.find((i) => i.product.id === product.id);
    if (hasItem) {
      dispatch(
        {
            type: 'UpdateQuantityProductCart',
            payload: product,
        });
    } else {
        dispatch(
            {
                type: 'AddProductCart',
                payload: product,
            });
    }
  };

  const handlerDeleteProductCart = (id) => {
    //para eliminar productos de carro
    dispatch({
        type: 'DeleteProductCart',
        payload: id,
    })
  };

  return (
    <>
      <div className="container my-4">
        <h3>Cart App</h3>

        <CatalogView handler={handlerAddProductCart} />
        {cartItems?.length <= 0 || (  //si esta vacio no muestres nada, si hay algo muestra este div
          <div className="my-4 w-50">
            <CartView
              items={cartItems}
              handlerDelete={handlerDeleteProductCart}
            />
          </div>
        )}
      </div>
    </>
  );
};
