const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
  name: '',
  price: '',
  editingMode: {
    state: false,
    index: '',
  }
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeServiceField(state, { payload }) {
      const { name, value } = payload;

      state[name] = value;
    },
    editService(state, { payload }) {
      return payload;
    },
    endServiceEditing(state) {
      return initialState;
    },
  },
});

export const {
  changeServiceField,
  editService,
  endServiceEditing
} = formSlice.actions;

export default formSlice.reducer;