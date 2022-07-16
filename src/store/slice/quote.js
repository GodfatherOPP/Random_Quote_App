import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import quoteService from "../../services/quote";

export const getQuote = createAsyncThunk(
  "quote/getQuote",
  async (params, thunkAPI) => {
    try {
      const quotedata = await quoteService.getQuote();
      if (quotedata.status) {
        return {
          quote: quotedata.quotes[0].text,
          author: quotedata.quotes[0].author,
        };
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);
const initialState = {
  quote: {
    text: "",
    author: "",
  },
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  extraReducers: {
    [getQuote.fulfilled]: (state, action) => {
      state.quote.text = action.payload.quote;
      state.quote.author = action.payload.author;
    },
    [getQuote.rejected]: (state, action) => {
      state.quote.text = "";
      state.quote.author = "";
    },
  },
});
export default quoteSlice.reducer;
