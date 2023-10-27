import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Import react-router 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import pages
import App from './App.tsx';
import Home from './routes/Home.tsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[{
        path: "/",
        element: <Home/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
