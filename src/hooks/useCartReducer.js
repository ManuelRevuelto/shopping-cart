import { useReducer } from "react";
import { cartReducer, initialState } from "../reducer/cart";

export const useCartReducer = () => {
    const [state, dispatch] = useReducer(cartReducer, initialState)
    const addToCart = product => dispatch({ type: 'ADD_TO_CART', payload: product });
    const removeFromCart = product => dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    const removeOneFromCart = product => dispatch({ type: 'REMOVE_ONE_FROM_CART', payload: product });
    const clearCart = product => dispatch({ type: 'CLEAR_CART', payload: product });
    return { state, addToCart, removeFromCart, removeOneFromCart, clearCart }
}