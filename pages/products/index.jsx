import React, { useEffect, useState } from "react";
import Products from "../../components/Products";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getAllProducts() {
      const response = await fetch("http://localhost:3001");
      const products = await response.json();
      setProducts(products);
    }
    getAllProducts();
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      <Products products={products} />
    </div>
  );
};

export default ProductsPage;
