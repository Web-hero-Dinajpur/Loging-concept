import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './compornents/Main/Main';
import Home from './compornents/Home/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
    {
      path: '/',
      element:<Home></Home>
    },
    {
      path: '/'
    }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
