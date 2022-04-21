import React, { Fragment, useEffect, useState } from "react";
import ProductTile from "./tile";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadData();
    handleClick("All");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = async () => {
    const products = await getProducts();
    setProducts(products);
    setNewProducts(products);
    const categories = await getCategories();
    setCategories(categories);
  };

  const getProducts = () => {
    return fetch(
      "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products"
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };

  const getCategories = () => {
    return fetch(
      "https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories"
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };

  const handleClick = async (categoryName: any) => {
    let newList = products;
    if (categoryName !== "All") {
      newList = products.filter((x: any) => x.category === categoryName);
    }
    setNewProducts(newList);
  };

  return (
    <div className="grid grid-row-auto">
      <div className="grid grid-cols-1">
        <div className="grid grid-cols-5 pt-10">
          <button
            id="All"
            style={{
              paddingTop: "0.1rem",
              paddingBottom: "0.1rem",
              border: "solid 1px gray",
              margin: "0 10px",
            }}
            className="bg-primary hover:bg-secondary focus:bg-white focus:outline-none focus:ring focus:ring-grey rounded-full"
            onClick={() => handleClick("All")}
          >
            All
          </button>

          {categories.map((category: any) => {
            return (
              <button
                key={category.id}
                id={category.name}
                style={{
                  paddingTop: "0.1rem",
                  paddingBottom: "0.1rem",
                  border: "solid 1px gray",
                  margin: "0 10px",
                  padding: "6px",
                }}
                className="bg-primary hover:bg-secondary focus:bg-white focus:outline-none focus:ring focus:ring-grey rounded-full"
                onClick={() => handleClick(category.name)}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        <div className="my-8 rounded-lg pt-12 p-12">
          <div className="grid grid-cols-3 items-center">
            <div></div>

            <div className="text-center text-4xl font-bold">Products</div>

            <div className="flex justify-end items-center">
              {products.length > 0 && (
                <span className="font-bold px-8">
                  Showing 1 of {products.length}
                </span>
              )}
              <span> </span>
            </div>
          </div>
        </div>
        {newProducts.length !== 0 ? (
          <div className="grid grid-cols-3 -mt-20">
            {newProducts.map((product: any) => {
              return (
                <Fragment key={product.id}>
                  <ProductTile product={product} />
                </Fragment>
              );
            })}
          </div>
        ) : (
          <div className="my-40 text-center text">
            No Data Found Matching This Category
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
