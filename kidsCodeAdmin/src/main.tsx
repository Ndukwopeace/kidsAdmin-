import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider,} from 'react-router'
import Router from './Router/Router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={Router}/>
)
