import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    currentCurrency: "$",
  },
  reducers: {
    setCurrency(state, action) {
      if (state.currentCurrency) {
        state.currentCurrency = action.payload;
      }
    },
  },
});
export const {setCurrency} = cartSlice.actions
export default cartSlice.reducer