import React from 'react';
import Home from './pages/Home';
import Project from './pages/Project';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import App from './App';
import NewProject from './pages/NewProject';
import WelcomePage from './pages/WelcomePage';

const routes= [
    {
        path:"/",
        element:<WelcomePage/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/home",
        element:<Home/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/project/:id",
        element:<Project/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/about",
        element:<About/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/newproject",
        element:<NewProject/>,
        errorElement:<ErrorPage/>
    }
]

export default routes
