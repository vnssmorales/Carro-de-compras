import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { useItemsCart } from "./hooks/useItemsCart";



export const CartApp = () => {

  //recibe el objeto del hook useItemsCart
  const {cartItems, handlerAddProductCart, handlerDeleteProductCart} = useItemsCart();

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
