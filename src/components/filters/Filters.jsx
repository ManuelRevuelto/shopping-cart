import { useId, useState } from "react"
import "./Filters.css"
import { useFetchCategories } from "../../hooks/useFetch";
import { useFilters } from "../../hooks/useFilters";

export function Filters() {

    const { categories } = useFetchCategories();
    const { filters, setFilters } = useFilters()

    const priceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={priceFilterId}>Precio</label>
                <input
                    type='range'
                    id={priceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select onChange={handleChangeCategory} id={categoryFilterId}>
                    <option value='all'>Todas</option>
                    {categories && categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
        </section>
    )
}