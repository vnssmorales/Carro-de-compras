import { useState } from "react";
import { CartView } from "../components/CartView";
import { CatalogView } from "../components/CatalogView";

const initialCartItems = [
  // {
   //     product: {},
  //      quantity: 0,
   //     total: 0
  //  }
];
export const CartApp = () => {

    const [cartItems, setCartItems] = useState(initialCartItems);

    const handlerAddProductCart = (product) => {  //se actualiza el estado del carro
        
        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if(hasItem){
        //  setCartItems([
        //    ...cartItems.filter((i) => i.product.id !== product.id), //con el filter se quita el producto para agregarlo con la cantidad actualizada
        //    {
        //        product,
        //        quantity: hasItem.quantity + 1
        //    }
        //  ])

        setCartItems( //el map entrega un nuevo arreglo por lo que no son necesarios los corchetes
             cartItems.map((i) => {
                if(i.product.id === product.id) { //preguntamos si el producto existe
                    i.quantity = i.quantity + 1; //si no existe se actualiza la cantidad
                }
                return i; //map siempre devuelve el objeto modificado por lo que debe ir con return
             }),  //map actualiza, no elimina y actualiza como filter por lo tanto no cambia el orden de los productos al ir agregando
          )

        }else{
            setCartItems([...cartItems,
                {
                    product,
                    quantity: 1,
                }
            ])
        }
        
       
    }
 
 const handlerDeleteProductCart = (id) => { //para eliminar productos de carro
     setCartItems([
        ...cartItems.filter((i) => i.product.id !== id)
     ]);
 }

  return (
    <>
      <div className="container">
        <h3>Cart App</h3>

        <CatalogView handler={handlerAddProductCart} />

        <div className="my-4 w-50">
         <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />
        </div>
      </div>
    </>
  );
};
