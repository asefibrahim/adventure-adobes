import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import Destination from "../pages/Destination";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/destination',
                element: <Destination></Destination>
            }
        ]

    }
])
export default router