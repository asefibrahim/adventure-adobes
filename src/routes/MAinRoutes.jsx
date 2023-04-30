import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Destination from "../pages/Destination";
import BannerFirst from "../banners/BannerFirst";
import Booking from "../pages/Booking";


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
                path: '/booking/:id',
                element: <Booking></Booking>,
                loader: ({ params }) => fetch(`http://localhost:4500/places/${params.id}`)


            },

            {
                path: '/destination/:id',
                element: <Destination></Destination>,
                loader: ({ params }) => fetch(`http://localhost:4500/hotel/${params.id}`)

            }
        ]

    },


])
export default router