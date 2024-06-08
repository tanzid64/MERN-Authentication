import { baseApiSlice } from "./baseApiSlice";

const authApi = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (user) => ({
        url: "auth/signin",
        method: "POST",
        body: user,
      }),
    }),
    signUp: builder.mutation({
      query: (user) => ({
        url: "auth/signup",
        method: "POST",
        body: user,
      }),
    }),
  }),
})

export const { useSignInMutation, useSignUpMutation } = authApi;