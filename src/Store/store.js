import { configureStore } from "@reduxjs/toolkit";
import setoresReducer from "./setoresSlice";

export default configureStore({
  reducer: {
    setores: setoresReducer,
  },
});
