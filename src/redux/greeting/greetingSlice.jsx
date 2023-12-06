import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await axios.get('http://127.0.0.1:3000/api/v1/greetings');
    console.log(response.data.greeting);
    return response.data.greeting;
  }
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: null,
    loading: false,
    error: null,
  },
  reducers: {
    setGreeting: (state, action) => {
      state.greeting = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.greeting = action.payload;
        state.loading = false;
      });
  },
});

export const randomGreeting = (state) => state.greeting.greeting;

export default greetingSlice.reducer;
