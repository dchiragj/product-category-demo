import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../components/Products";
import AddNewProduct from "../components/AddNewProduct";
import ProductItem from "../components/ProductItem";

const ConfigRoute: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/add-product" element={<AddNewProduct />} />
        <Route path="/product/item/:id" element={<ProductItem />} />
      </Routes>
    </>
  );
};

export default ConfigRoute;
