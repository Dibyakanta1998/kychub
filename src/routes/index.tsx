import { createBrowserRouter, Navigate } from "react-router-dom";
import Product from "../screens/product";
import { CompareProduct } from "../screens/compareProduct";
import { ProductLayout } from "../layout/ProductLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/products" replace />,
      },
      {
        path: "/products",
        element: <Product />,
      },

      {
        path: "/compareProducts",
        element: <CompareProduct />,
      },
    ],
  },
]);

export default router;
