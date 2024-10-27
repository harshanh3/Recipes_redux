import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch all products
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const result = await axios.get("https://dummyjson.com/recipes");
    // session storage 
    sessionStorage.setItem("allrecipes",JSON.stringify(result.data.recipes))
    return result.data.recipes; // Assuming API returns products under `recipes`
  }
);

const productSlices = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    allDummyProduct:[],
    loading: false,
    error: null,
  },
  reducers: {
    searchProduct: (state, searchkeyFromHeader) => {
      state.allProducts = state.allDummyProduct.filter(item => 
        item.cuisine.toLowerCase().includes(searchkeyFromHeader.payload))
    }
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
        // No need to assign anything to `allDummyProduct` here
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
        state.allDummyProduct = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.allDummyProduct = [];
      });
  }
  
});

export const {searchProduct}= productSlices.actions
export default productSlices.reducer;
