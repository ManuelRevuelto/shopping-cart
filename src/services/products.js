export const searchMovies = async () => {
    try {
        const response = await fetch(import.meta.env.VITE_API_URL + 'products');
        const data = await response.json();
        return data.products;
    } catch (e) {
        throw new Error(`Error seaching products: ${e.message}`);
    }
}