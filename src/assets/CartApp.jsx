import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

export const CartApp = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(getProducts()); //getProducts viene de productService y se la paso a setProducts para manejar el estado
  }, []);

  return (
    <>
      <div className="container">
        <h3>Cart App</h3>

        <div className="row">
          {products.map((prod) => (

            <div className="col-4 my-2" key={prod.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{prod.name}</h5>
                  <p className="card-text">{prod.description}</p>
                  <p className="card-text">{prod.price}</p>
                  <button className="btn btn-primary">Agregar</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="my-4 w-50">
          <h3>Carro de compras</h3>

          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Eliminar</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Nombre</td>
                <td>Precio</td>
                <td>Cantidad</td>
                <td>Total</td>
                <td>Eliminar</td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td colSpan="3" className="text-end fw-bold">
                  Total
                </td>
                <td colSpan="2" className="text-start fw-bold">
                  12345
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};
