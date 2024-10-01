import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface NewsState {
  news: NewsType;
  allNews: NewsType;
  isLoading: boolean;
}

export interface NewsType {
  status: string;
  sources: SingleNews[];
}

const initialState: NewsState = {
  news: { status: "", sources: [] },
  allNews: { status: "", sources: [] },
  isLoading: true,
};

export interface SingleNews {
  category: string;
  country: string;
  description: string;
  id: string;
  name: string;
  url: string;
}

const URL = "https://newsapi.org/v2/top-headlines/sources";

export const getNews = createAsyncThunk("news/getNews", async (_, thunkAPI) => {
  try {
    const res = await axios.get(
      `${URL}?apiKey=${import.meta.env.VITE_API_KEY}`
    );
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Something went wrong.");
  }
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      state.news.sources = state.allNews.sources;
      action.payload === "X"
        ? ""
        : (state.news.sources = state.news.sources.filter(
            (e) => e.category === action.payload
          ));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload;
        state.allNews = action.payload;
      })
      .addCase(getNews.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { filterByCategory } = newsSlice.actions;

export default newsSlice.reducer;
