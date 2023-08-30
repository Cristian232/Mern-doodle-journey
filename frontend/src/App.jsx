import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Users from "./user/pages/Users.jsx";
import NewPlaces from "./places/pages/NewPlaces.jsx";


const router = createBrowserRouter([{
    path: "/",
    element: <Users />,
    }, {
        path: "/places/new",
        element: <NewPlaces />
    }, {
        path: "*",
        element: <Navigate to={"/"} replace />
}])


    function App() {
        return <RouterProvider router={router}/>;
}

export default App
