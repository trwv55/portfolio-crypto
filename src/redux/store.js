import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './slices/crypto/slice';

const store = configureStore({
    reducer: {
        crypto: cryptoReducer,
    },
});

export default store;
