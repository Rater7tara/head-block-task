import React from 'react';
import { Vortex } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Vortex
                visible={true}
                height="100"
                width="100"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        </div>
    );
};

export default Loading;
