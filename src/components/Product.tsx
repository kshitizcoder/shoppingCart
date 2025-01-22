import React from "react";
import { useGetAllProductQuery } from "../redux/productApi";
import { Link } from "react-router-dom";
import { Product as productType } from "../assets/typeAll";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/addToCartSlice";

const Product: React.FC = () => {
  const { data, isLoading } = useGetAllProductQuery();

  const dispatch = useDispatch();
  console.log(data);
  const handleAddToCart = (prod: productType) => {
    dispatch(addProductToCart(prod));
  };
  if (isLoading) {
    return <div className="text-xl text-center">Loading </div>;
  }
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
      {data?.map((prod) => {
        const subtitle = `${prod.title.substring(0, 30)}...`;
        return (
          <div key={prod?.id}>
            <div className="w-64 mx-auto h-64">
              <img
                className="w-full h-full object-contain"
                src={prod?.image}
                alt={prod?.title}
              />
            </div>
            <div className="">
              <h2 className="capitalize text-center font-bold">
                {prod?.title.length > 30 ? subtitle : prod.title}
              </h2>
              <div className="mt-5 flex justify-around">
                <button className="bg-blue-800 text-white px-4 md:px-8 py-1 mr-4  font-medium hover:bg-white hover:text-black transition duration-300 ease-linear">
                  <Link to={`/details/${prod.id}`}>See Details</Link>{" "}
                </button>
                <button
                  onClick={() => handleAddToCart(prod)}
                  className="hover:bg-blue-800 font-medium hover:text-white px-5 py-1 mr-4 transition duration-300 ease-linear"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Product;
