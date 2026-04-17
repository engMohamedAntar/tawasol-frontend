//store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './modules'; // the reducer exported from index.js
 
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
});
 
export default store;