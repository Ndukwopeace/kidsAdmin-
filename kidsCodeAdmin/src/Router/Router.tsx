import React from 'react';
import { createBrowserRouter  } from 'react-router-dom';
import App from '../App';
import LoginPage from '../pages/Auth/LoginPage';
import Dashboard from '../pages/Dashboard/Dashboard';


const Router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {
                path: "/",
                element:<LoginPage/>
            },
            {
                path: "/dashBoard",
                element:<Dashboard/>
            },
            
        ]
    }
]);


export default Router;