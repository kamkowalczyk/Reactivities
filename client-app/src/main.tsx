
import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import 'react-calendar/dist/Calendar.css'
import './app/layout/styles.css'
import 'react-toastify/dist/ReactToastify.min.css'
import React from 'react'
import { StoreContext, store } from './app/api/stores/store'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/Routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
    <StoreContext.Provider value={store}>
     <RouterProvider router={router}/>
    </StoreContext.Provider>
    </React.StrictMode>
)
