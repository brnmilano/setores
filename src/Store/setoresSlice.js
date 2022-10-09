import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSetores = createAsyncThunk(
  "setores/fetchSetores",
  async () => {
    const response = await axios.get("http://localhost:3001/setores");
    return response.data;
  }
);

export const postSetores = createAsyncThunk("setores/postSetores", async () => {
  const response = await axios.post("http://localhost:3001/setores");
  return response.data;
});

export const setoresSlice = createSlice({
  name: "setores",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(fetchSetores.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchSetores.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchSetores.rejected, (state, action) => {
        state.status = "failed";
      })

      .addCase(postSetores.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(postSetores.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = [...state.data, action.payload];
      })
      .addCase(postSetores.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default setoresSlice.reducer;
