import React from 'react';
import {useSelector} from'react-redux';
import SonOfBox from './SonOfBox';
const Box = () => {
    let count = useSelector(state => state.count);
    return (
        <div>
            Box is {count}
            <SonOfBox></SonOfBox>
        </div>
    );
};

export default Box;