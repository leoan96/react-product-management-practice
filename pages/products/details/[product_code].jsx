import { useRouter } from "next/router";
import React from "react";
import EditProduct from "../../../components/EditProduct";

function ProductDetails() {
  const router = useRouter();

  return (
    <div>
      <h1>Details Page</h1>
      <EditProduct productCode={router.query.product_code} />
    </div>
  );
}

export default ProductDetails;
