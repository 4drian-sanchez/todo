import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { App } from "../App";
import { ErrorScreen } from "../Screens/ErrorScreen";


export const RouterApp = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorScreen />,
            
        },

    ]);


    return (
        <RouterProvider router={router} />
    )
}

