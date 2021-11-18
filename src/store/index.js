import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { 
    counter: 0,
    showCounter: true,
    resedentialAddress: [],
    propertyAddress: [],
    employmentAddress: []
 };

const addressSlice = createSlice({
  name: 'addresses',
  initialState,
  reducers: {
    updateResedential(state, action) {
      state.resedentialAddress = [];  
      state.resedentialAddress.push(action.payload);
    },
    updateProperty(state, action) {
      state.propertyAddress = []
      state.propertyAddress.push(action.payload);
    },
    updateEmployment(state, action) {
      state.employmentAddress.push(action.payload);
    },
    reset(state) {
      state.resedentialAddress = [];
      state.propertyAddress = [];
      state.employmentAddress = [];
    }
  }
});

const store = configureStore({
  reducer: addressSlice.reducer
});

export const addressActions = addressSlice.actions;

export default store;