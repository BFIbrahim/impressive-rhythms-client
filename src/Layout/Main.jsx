import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Shared/Navigation';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet/>
        </div>
    );
};

export default Main;