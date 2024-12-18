import { AddToCartIcon, RemoveFromCartIcon } from '../Icons'
import { useCart } from "../../hooks/useCart";
import './Products.css'
export function Products({ products }) {
    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <section className='products'>
            <ul>
                {products.map(product => {
                    const isProductInCart = checkProductInCart(product);
                    return (
                        <li key={product.id}>
                            <div className='product-container'>
                                <img src={product.image} alt={product.title} />
                                <div>
                                    <strong>{product.title}</strong> - ${product.price}
                                </div>
                            </div>
                            <div className='button-container'>
                                <button style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}>
                                    {
                                        isProductInCart
                                            ? <RemoveFromCartIcon />
                                            : <AddToCartIcon />
                                    }
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}