import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Statistics from './components/NavigationLink/Statistics';
import AppliedJobs from './components/Navbar/AppliedJobs';
import JobDetails from './components/Navbar/JobDetails';
import ErrorElement from './Error/ErrorElement';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>,
      },
      {
        path:'/appliedJobs',
        element:<AppliedJobs></AppliedJobs>,
      },
      {
        path:'/jobDetails',
        element:<JobDetails></JobDetails>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
