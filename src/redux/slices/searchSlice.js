import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  query: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearchField(state, { payload }) {
      const { name, value } = payload;

      state[name] = value;
    },
  },
});

export const {
  changeSearchField,
} = searchSlice.actions;

export default searchSlice.reducer;