import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { MdDelete } from "react-icons/md";
import { deletProductFromCart } from "../redux/addToCartSlice";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { productInCart } = useAppSelector((state) => state.addedProducts);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      productInCart.map((pro) => pro.price).reduce((acc, curr) => acc + curr, 0)
    );
  }, [productInCart]);

  if (productInCart.length === 0) {
    return (
      <div className="text-center my-10">
        <h2 className="bg-blue-700 w-[90%] md:w-[50%] text-xl md:text-3xl mx-auto text-white py-4 rounded-lg">
          No Product in Cart
        </h2>
      </div>
    );
  }

  const handleDelete = (id: number) => {
    dispatch(deletProductFromCart(id));
  };

  return (
    <section className="max-w-7xl mx-auto my-10 p-5 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl md:text-3xl font-semibold text-center mb-5">
        Shopping Cart
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-300 px-2 md:px-4 py-2">
                Image
              </th>
              <th className="border border-gray-300 px-2 md:px-4 py-2">
                Title
              </th>
              <th className="border border-gray-300 px-2 md:px-4 py-2">
                Amount
              </th>
              <th className="border border-gray-300 px-2 md:px-4 py-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {productInCart.map((cartPro) => {
              const subtitle = `${cartPro.title.substring(0, 20)}...`;
              return (
                <tr key={cartPro.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    <img
                      className="w-12 h-12 md:w-16 md:h-16 object-contain mx-auto"
                      src={cartPro?.image}
                      alt={cartPro?.title}
                    />
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    {cartPro?.title.length > 20 ? subtitle : cartPro.title}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    $ {cartPro?.price.toFixed(2)}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    <button
                      onClick={() => handleDelete(cartPro?.id)}
                      className="flex items-center justify-center text-white bg-red-600 px-3 md:px-4 py-1 md:py-2 rounded hover:bg-red-700"
                    >
                      Delete
                      <MdDelete className="ml-2 text-lg md:text-xl" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col md:flex-row justify-end items-center mt-5">
        <p className="text-lg md:text-2xl font-semibold">
          Total: $ {totalPrice.toFixed(2)}
        </p>
      </div>
    </section>
  );
};

export default Cart;

// import React, { useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from "../redux/hooks";
// import { MdDelete } from "react-icons/md";
// import { deletProductFromCart } from "../redux/addToCartSlice";

// const Cart: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const { productInCart } = useAppSelector((state) => state.addedProducts);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     setTotalPrice(
//       productInCart.map((pro) => pro.price).reduce((acc, curr) => acc + curr, 0)
//     );
//   }, [productInCart]);
//   if (productInCart.length === 0) {
//     return (
//       <div className=" text-center">
//         <h2 className="bg-blue-700 w-[50%] text-3xl mx-auto text-white">
//           No Product in Cart
//         </h2>
//       </div>
//     );
//   }
//   const handleDelete = (id: number) => {
//     dispatch(deletProductFromCart(id));
//   };
//   return (
//     <section className="max-w-5xl mx-auto my-10 bg-white shadow-lg rounded-lg p-5">
//       <h1 className="text-3xl font-semibold text-center mb-5">Shopping Cart</h1>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-100 text-left">
//             <th className="border border-gray-300 px-4 py-2 text-xl">Image</th>
//             <th className="border border-gray-300 px-4 py-2 text-xl">Title</th>
//             <th className="border border-gray-300 px-4 py-2 text-xl">Amount</th>
//             <th className="border border-gray-300 px-4 py-2 text-xl">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {productInCart.map((cartPro) => {
//             const subtitle = `${cartPro.title.substring(0, 20)}...`;
//             return (
//               <tr key={cartPro.id} className="hover:bg-gray-50">
//                 <td className="border border-gray-300 px-4 py-2">
//                   <img
//                     className="w-16 h-16 object-contain mx-auto"
//                     src={cartPro?.image}
//                     alt={cartPro?.title}
//                   />
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2 text-lg">
//                   {cartPro?.title.length > 20 ? subtitle : cartPro.title}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2 text-lg">
//                   $ {cartPro?.price}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   <button
//                     onClick={() => handleDelete(cartPro?.id)}
//                     className="flex items-center justify-center text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700"
//                   >
//                     Delete
//                     <MdDelete className="ml-2 text-xl" />
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <div className="flex justify-end mt-5">
//         <p className="text-2xl font-semibold">
//           Total: $ {totalPrice.toFixed(2)}
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Cart;

// // import React, { useEffect, useState } from "react";
// // import { useAppSelector } from "../redux/hooks";
// // // import { FaPlus } from "react-icons/fa";
// // // import { FaMinus } from "react-icons/fa6";
// // import { MdDelete } from "react-icons/md";

// // const Cart: React.FC = () => {
// //   const { productInCart } = useAppSelector((state) => state.addedProducts);
// //   // const [quantity, setQuantity] = useState(0);
// //   const [totalPrice, setTotalPrice] = useState(0);
// //   useEffect(() => {
// //     setTotalPrice(
// //       productInCart.map((pro) => pro.price).reduce((acc, curr) => acc + curr, 0)
// //     );
// //   }, [productInCart]);

// //   return (
// //     <section className=" max-w-90 mx-[20rem]">
// //       <div>
// //         {productInCart.map((cartPro) => {
// //           const subtitle = `${cartPro.title.substring(0, 20)}...`;

// //           // calculateTotalPrice();
// //           return (
// //             <div className="flex items-center gap-4" key={cartPro.id}>
// //               <div className="w-20 ">
// //                 <img
// //                   className="w-full h-full object-contain"
// //                   src={cartPro?.image}
// //                   alt={cartPro?.title}
// //                 />
// //               </div>
// //               <div>
// //                 <h2 className="text-2xl">
// //                   {" "}
// //                   {cartPro?.title.length > 20 ? subtitle : cartPro.title}
// //                 </h2>
// //               </div>

// //               <div>
// //                 {" "}
// //                 <h2 className="flex items-center text-2xl w-full gap-5">
// //                   Amount: <span className="text-2xl">$ {cartPro?.price}</span>{" "}
// //                 </h2>
// //               </div>
// //               <div>
// //                 <button className="flex items-center text-2xl bg-red-700 text-white px-7 py-1">
// //                   Delete
// //                   <MdDelete className="text-2xl " />
// //                 </button>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>
// //       <div className="flex justify-end w-[90%] ">
// //         <p className="mr-[15rem] text-2xl">Total : {totalPrice}</p>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Cart;
