import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fakeFetchCrypto } from '../../../api';

// Создаем асинхронный thunk для выполнения запроса к API
export const fetchCryptoData = createAsyncThunk('crypto/fetchData', async () => {
    try {
        const { data } = await fakeFetchCrypto();
        console.log('data', data);
        return data;
    } catch (error) {
        console.error(error.message);
    }
});

// Создаем Slice
const cryptoSlice = createSlice({
    name: 'crypto',
    initialState: {
        data: [],
        status: 'Status.LOADING',
    },
    reducers: {
        setItems(state, action) {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCryptoData.fulfilled, (state, action) => {
            console.log('hi2');
            state.status = 'success';
            state.data = action.payload;
        });
    },
});

// Экспортируем экшены и редюсер из Slice
export const { setItems } = cryptoSlice.actions;

export default cryptoSlice.reducer;
