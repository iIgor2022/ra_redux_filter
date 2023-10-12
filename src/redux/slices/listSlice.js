import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  {
    id: '76OOH7xQPaqkVY6WJhpJ5',
    name: 'Замена стекла',
    price: '21000',
  },
  {
    id: 'Vmii-9M7fj9C6LpjSx1Eh',
    name: 'Замена дисплея',
    price: '25000',
  },
  {
    id: 'WJ0HT1M9kA-IeAcSq6Quu',
    name: 'Замена аккумулятора',
    price: '4000',
  },
  {
    id: 'G5RdV1pOqHALXLT8hY1Oa',
    name: 'Замена микрофона',
    price: '2500',
  },
];

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addService(state, { payload }) {
      const { name, price } = payload;

      state.push({ id: nanoid(), name, price});
    },
    addServiceChange(state, { payload }) {
      const { index , name, price } = payload;

      state[index] = {
        id: state[index].id,
        name,
        price,
      };
    },
    removeService(state, { payload }) {
      const { id } = payload;
      const index = state.findIndex(service => service.id === id);

      state.splice(index, 1);
    },
  },
});

export const {
  addService,
  addServiceChange,
  removeService,
} = listSlice.actions;

export default listSlice.reducer;