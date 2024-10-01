import { configureStore } from "@reduxjs/toolkit";
import news from "../features/newsSlice";

export const store = configureStore({
  reducer: {
    news,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
