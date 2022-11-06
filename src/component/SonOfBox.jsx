import React from 'react';
import {useSelector} from 'react-redux';
const SonOfBox = () => {
    const count = useSelector((state) => state.count);
    return (
        <div>
            SonOfBox is {count}
        </div>
    );
};

export default SonOfBox;