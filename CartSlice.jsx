import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],   // stores plant objects
    total: 0,    // total cart amount
  },
  reducers: {
    /* ---------- ADD ITEM ---------- */
    addItem: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find(
        (i) => i.name === item.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
        state.total += item.cost;
      } else {
        state.items.push({ ...item, quantity: 1 });
        state.total += item.cost;
      }
    },

    /* ---------- REMOVE ITEM ---------- */
    removeItem: (state, action) => {
      const itemName = action.payload;

      const itemToRemove = state.items.find(
        (item) => item.name === itemName
      );

      if (itemToRemove) {
        state.total -= itemToRemove.cost * itemToRemove.quantity;
        state.items = state.items.filter(
          (item) => item.name !== itemName
        );
      }
    },

    /* ---------- UPDATE QUANTITY ---------- */
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;

      const item = state.items.find(
        (item) => item.name === name
      );

      if (item) {
        const difference = amount - item.quantity;
        item.quantity = amount;
        state.total += difference * item.cost;
      }
    },
  },
});

/* ---------- EXPORT ACTIONS ---------- */
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

/* ---------- EXPORT REDUCER ---------- */
export default cartSlice.reducer;
