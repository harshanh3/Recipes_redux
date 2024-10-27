import {configureStore } from "@reduxjs/toolkit"
import productSlices from "./slices/productSlices";


const recipesStore = configureStore({
    reducer: {
        products: productSlices,
      },

});
export default  recipesStore;



