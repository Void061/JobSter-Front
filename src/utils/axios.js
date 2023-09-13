import axios from "axios";
import { clearStore } from "../features/user/userSlice";
import { getUserFromLocalStorage } from "./localStorage";

const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

// Response interceptor
// Se esiste l'utente nel local storage allora lo aggiungiamo ad ogni call (il suo token jwt)
customFetch.interceptors.request.use(
  (config) => {
    const user = getUserFromLocalStorage();
    if (user) {
      config.headers["Authorization"] = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Controllo del token se è scaduto o meno
export const checkForUnauthorizedResponse = (error, thunkAPI) => {
   if (error.response.status === 401) {
     thunkAPI.dispatch(clearStore());
     return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
   }
};
export default customFetch;
