import { createContext } from "react";
import { useCartReducer } from "../hooks/useCartReducer";

export const CartContext = createContext()

export function CartProvider({ children }) {
    const { state, addToCart, removeFromCart, removeOneFromCart, clearCart } = useCartReducer();
    // const [cart, setCart] = useState([]);

    // const addToCart = (product) => {
    //     const existingItem = cart.findIndex(item => item.id === product.id);
    //     if (existingItem >= 0) {
    //         const newCart = structuredClone(cart);
    //         newCart[existingItem].quantity += 1;
    //         setCart(newCart)
    //     } else {
    //         setCart(prevState => ([
    //             ...prevState,
    //             {
    //                 ...product,
    //                 quantity: 1,
    //             }
    //         ]))
    //     }
    // }

    // const removeFromCart = (product) => {
    //     setCart(prevState => prevState.filter(item => item.id !== product.id));
    // }

    // const removeOneFromCart = (product) => {
    //     const existingItem = cart.findIndex(item => item.id === product.id);
    //     const newCart = structuredClone(cart);
    //     if (newCart[existingItem].quantity > 1) {
    //         newCart[existingItem].quantity -= 1;
    //         setCart(newCart)
    //     } else {
    //         removeFromCart(product);
    //     }
    // }

    // const clearCart = () => {
    //     setCart([]);
    // }

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            clearCart,
            removeFromCart,
            removeOneFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}