import {
    Navigate,
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../Layout/ErrorPage";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login/Login";


  export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        }
      ]
    },
  ]);