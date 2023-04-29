import React from 'react';
import NavBer from '../navbars/Navber';
import './MianLayOut.css'


import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (

        <div className='bgColor'
        >

            <NavBer></NavBer>
            <Outlet></Outlet>

        </div>

    );
};

export default MainLayout;