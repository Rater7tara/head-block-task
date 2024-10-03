import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {

  RouterProvider,
  
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './providers/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <div className='max-w-screen-2xl mx-auto'>
      <RouterProvider router={router} />
    </div>
    </AuthProvider>
    
  </StrictMode>,
)
