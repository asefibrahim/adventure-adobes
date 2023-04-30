import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Destination from "../pages/Destination";
import BannerFirst from "../banners/BannerFirst";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <BannerFirst></BannerFirst>,

            },

            {
                path: '/destination',
                element: <Destination></Destination>
            }
        ]

    },


])
export default router