import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../assets/typeAll";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getAllProduct: builder.query<Product[], void>({
      query: () => "/products",
    }),
    getAProduct: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
    }),
  }),
});
export const { useGetAllProductQuery, useGetAProductQuery } = productApi;
