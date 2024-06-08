import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/api/v1/",
});

export const baseApiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
});
