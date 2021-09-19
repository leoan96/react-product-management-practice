import React from "react";
import Link from "next/link";

const Products = (props) => {
  return (
    <div>
      <p>List of All Products</p>
      <ul>
        {props.products.map((product) => (
          <li key={product.product_code}>
            <Link href={`/products/details/${product.product_code}`}>
              <a>{product.product_name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
