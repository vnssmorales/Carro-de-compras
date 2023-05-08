import {products} from '../data/products'

export const getProducts = () => {
    return products;
}
export const calculateTotal = (items) => {
    //para sumar uso reduce, que es un callback que contiene el acumulador y el valor actual
    return items.reduce(
        (accumulator, item) => accumulator + item.product.price*item.quantity
        , 0) //segundo parametro inicializa el acumulador en 0
}