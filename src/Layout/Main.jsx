import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Shared/Navigation';
import TopNav from '../Shared/TopNav';

const Main = () => {
    return (
        <div>
            <TopNav></TopNav>
            <Navigation></Navigation>
            <Outlet/>
        </div>
    );
};

export default Main;