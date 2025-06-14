import { createContext, useContext, useEffect, useState } from "react"


const ProductsStore = createContext()

export default function ProductContextProvider({ children }) {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));

    }, [])

    return (
        <ProductsStore.Provider value={{ products, setProducts }}>
            {children}
        </ProductsStore.Provider>
    )
}

export const useProducts = () => useContext(ProductsStore)