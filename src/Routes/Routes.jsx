import {
    Navigate,
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../Layout/ErrorPage";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login/Login";
import ProductList from "../pages/ProductList/ProductList";
import SingleProduct from "../pages/ProductList/SingleProduct/SingleProduct";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/products',
                element: <ProductList />
            },
            {
                path: '/product/:id',
                element: <SingleProduct />
            },

        ]
    },
]);