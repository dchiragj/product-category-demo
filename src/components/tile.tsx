import React from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  product: any;
}
const Tile = ({ product }: IProps) => {
  const navigate = useNavigate();

  const parseText = function (text: any, limit: any) {
    if (text?.length > limit) {
      for (let i = limit; i > 0; i--) {
        if (
          text.charAt(i) === " " &&
          (text.charAt(i - 1) !== "," ||
            text.charAt(i - 1) !== "." ||
            text.charAt(i - 1) !== ";")
        ) {
          return text.substring(0, i) + "...";
        }
      }
      return text.substring(0, limit) + "...";
    } else return text;
  };
  const description = parseText(product?.description, 24);

  return (
    <>
      <div
        className="grid grid-row-4 items-center m-8 rounded p-8 shadow-lg radial-bg bg-white"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/product/item/${product.id}`)}
      >
        <span className="">{product.category}</span>
        <div className="grid grid-cols-1 text-center">
          <img alt="Product" src={product.avatar} className="w-100 px-8" />
        </div>
        <div className="grid grid-cols-1">
          <a
            href={product.category}
            className="transition duration-150 ease-in-out w-max justify-self-center border-b-2 border-gigas border-opacity-0 hover:border-opacity-75"
          >
            {product.title}
          </a>
        </div>
        <div className="grid grid-cols-1 text-center">
          <span>
            <strong>{product.name}</strong>
          </span>
          <span> {description}</span>
          <span> ${product.price}</span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Tile;
