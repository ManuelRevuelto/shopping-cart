import { useEffect, useState } from "react";
import { searchMovies } from "../services/products";

export const useFetchProducts = () => {
    const [products, setProducts] = useState(null); // Estado para almacenar los productos
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await searchMovies()
            setProducts(response); // Actualiza los productos
        };

        fetchProducts();
    }, []); 

    return { products }; // Devuelve los productos al componente padre
}

export const useFetchCategories = () => {
    const [categories, setCategories] = useState(null); // Estado para almacenar los productos
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + 'products/category');
                const data = await response.json();
                setCategories(data.categories); // Actualiza los productos
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []); // El array vacío asegura que se ejecuta solo una vez al montar el componente

    return { categories }; // Devuelve los productos al componente padre
}