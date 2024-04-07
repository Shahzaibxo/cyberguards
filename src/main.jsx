import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx'
import { NextUIProvider } from "@nextui-org/react";
import {Navigate} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      path: '',
      element: <Home />
    },
    {
      path: "about-us",
      element: <About />
    },
    {
      path: "Contact-us",
      element: <Contact />
    }
    ]
  },
  {
    path:"/*",
    element:<Navigate to="/"/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </NextUIProvider>
)
