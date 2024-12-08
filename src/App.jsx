import { Products } from "./components/products/Products";
import { useFetchProducts } from "./hooks/useFetch";
import { Header } from "./components/header/Header";
import { useFilters } from "./hooks/useFilters";
import { Footer } from "./components/footer/Footer";
import { IS_DEVELOPMENT } from "./config";
import { Cart } from "./components/cart/Cart";
import { CartProvider } from "./context/cart";

function App() {

    const { products } = useFetchProducts();
    const { filterProducts } = useFilters();
    const filteredProducts = filterProducts(products);

    return (
        <main>
            <CartProvider>
                <Header />
                <Cart />
                {filteredProducts && <Products products={filteredProducts} />}
                {IS_DEVELOPMENT && <Footer />}
            </CartProvider>
        </main>
    )
}

export default App