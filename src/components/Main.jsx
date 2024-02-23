import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCryptoData } from '../redux/slices/crypto/slice';

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('hi');
        dispatch(fetchCryptoData);
    }, []);

    return (
        <div className="bg-blackMain text-white grow">
            <div className="container">Main Portfolio</div>
        </div>
    );
};

export default Main;
