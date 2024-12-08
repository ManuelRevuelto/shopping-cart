import { useId } from "react";
import { CartIcon, ClearCartIcon } from "../Icons";
import { useCart } from "../../hooks/useCart";
import "./Cart.css"

export function CartItem({ image, title, price, quantity, addToCart, removeOneFromCart }) {
    return (
        <li>
            <img src={image} alt={title} />
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer>
                <button onClick={removeOneFromCart}>-</button>
                <small>Quantity: {quantity}</small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart() {
    const { cart, addToCart, clearCart, removeOneFromCart } = useCart()
    const cartCheckboxId = useId();
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className="cart">
                <h2>Carrito</h2>
                <ul>
                    {cart.map(product => {
                        return (
                            <CartItem key={product.id} addToCart={() => addToCart(product)} removeOneFromCart={() => removeOneFromCart(product)} {...product} />
                        )
                    })}
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}