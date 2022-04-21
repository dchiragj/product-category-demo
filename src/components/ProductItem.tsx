import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductItem = () => {
  const { id } = useParams<any>();
  const [product, setProducts] = useState<any>([]);

  useEffect(() => {
    fetch(
      `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8 shadow radial-bg bg-white rounded p-20"
        style={{ alignItems: "center" }}
      >
        <div
          className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={product.avatar}
            alt="product"
            className="object-center object-cover h-80"
          />
        </div>
        <div className="sm:col-span-8 lg:col-span-7 ">
          <span className="text-md font-bold text-gray-300 sm:pr-12 pt-20">
            {product.category}
          </span>
          <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12 pt-5">
            {product.name}
          </h2>

          <section aria-labelledby="information-heading" className="mt-2 pt-5">
            <h3 id="information-heading" className="">
              {product.description}
            </h3>

            <p className="text-2xl font-extrabold text-gray-900 pt-5">
              $ {product.price}
            </p>
          </section>

          <section
            aria-labelledby="options-heading"
            className="mt-10"
          ></section>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
