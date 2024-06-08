import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import { baseApiSlice } from "./apiSlices/baseApiSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    [baseApiSlice.reducerPath]: baseApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
