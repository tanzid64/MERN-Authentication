import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import { baseApiSlice } from "./apiSlices/baseApiSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

//* Combining all reducers
const rootReducer = combineReducers({
  user: userReducer,
  [baseApiSlice.reducerPath]: baseApiSlice.reducer,
});

//* Redux Persist Configuration
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApiSlice.middleware),
});

export const persistor = persistStore(store);
