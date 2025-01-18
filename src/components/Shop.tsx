import React from "react";
import Product from "./Product";
const Shop: React.FC = () => {
  return (
    <section className="p-10 ">
      <h1 className="text-xl font-medium">Welcome To Horizon Store</h1>
      <div>
        <Product />
      </div>
    </section>
  );
};
{
  /* <div className="flex gap-4 items-center">
                <FaPlus
                  className="text-2xl "
                  onClick={() => setQuantity(quantity + 1)}
                />
                <input
                  value={quantity}
                  className="border-slate-400 w-10 px-2 border-2 text-2xl"
                />

                <FaMinus
                  onClick={() =>
                    setQuantity(quantity < 1 ? quantity : quantity - 1)
                  }
                  className="text-2xl"
                />
              </div> */
}

export default Shop;
