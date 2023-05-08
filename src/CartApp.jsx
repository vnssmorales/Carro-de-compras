import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { useItemsCart } from "./hooks/useItemsCart";
import { Navbar } from "./components/Navbar";

export const CartApp = () => {
  //recibe el objeto del hook useItemsCart
  const { cartItems, handlerAddProductCart, handlerDeleteProductCart } =
    useItemsCart();

  return (
    <>
    <Navbar />
      <div className="container my-4">
        <h3>Cart App</h3>
        <Routes>
          <Route
            path="catalog"
            element={<CatalogView handler={handlerAddProductCart} />}
          />
          <Route
            path="cart"
            element={
              cartItems?.length <= 0 ? 
              <div className="alert alert-danger">No hay productos en el carrito de compras!</div>
              :
               (
                <div className="my-4 w-50">
                  <CartView
                    items={cartItems}
                    handlerDelete={handlerDeleteProductCart}
                  />
                </div>
              )
            }
          />

          <Route path="/" element={<Navigate to={"/catalog"} />} />
        </Routes>
      </div>
    </>
  );
};
