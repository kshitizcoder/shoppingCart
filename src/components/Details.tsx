import React from "react";
import { useParams } from "react-router-dom";
import { useGetAProductQuery } from "../redux/productApi";
import { useAppDispatch } from "../redux/hooks";
import { addProductToCart } from "../redux/addToCartSlice";
import { Product } from "../assets/typeAll";

const Details: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const productId = id ? Number(id) : undefined;
  const { data, isLoading } = useGetAProductQuery(productId as number);
  const handleAddToCart = (prod: Product) => {
    dispatch(addProductToCart(prod));
  };

  if (isLoading) {
    return;
  }

  console.log(data);
  return (
    <section className="max-w-5xl mx-auto my-10 p-5 bg-white shadow-lg rounded-lg">
      {data && (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-shrink-0 lg:w-1/2 w-full">
            <img
              className="w-full h-auto object-cover rounded-lg shadow-md"
              src={data?.image}
              alt={data.title}
            />
          </div>

          <div className="flex-grow">
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            <p className="text-gray-600 text-lg mb-3">{data.description}</p>
            <p className="text-xl font-semibold mb-3">
              Category:{" "}
              <span className="text-blue-700 capitalize">{data.category}</span>
            </p>
            <p className="text-xl font-semibold mb-3">
              Price:{" "}
              <span className="text-green-600">${data?.price?.toFixed(2)}</span>
            </p>
            <p className="text-lg font-medium mb-5">
              Rating:{" "}
              <span className="text-yellow-500">{data?.rating?.rate} / 5</span>{" "}
              ({data.rating.count} reviews)
            </p>
            <button
              onClick={() => handleAddToCart(data)}
              className="px-6 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Details;
