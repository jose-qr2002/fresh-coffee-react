import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QuioscoProvider } from './content/QuioscoProvider'
import router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QuioscoProvider>
        <RouterProvider router={router} />
      </QuioscoProvider>
  </React.StrictMode>,
)
