import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Paginas/Home.jsx"
import Productos from "./Paginas/Productos.jsx"
import './App.css'

function App() {


  const router = createBrowserRouter([

    {
      path: '/',
      element: <Home />
    },
    {
      path: '/Productos',
      element: <Productos />
    },

  ])


  return (


    <RouterProvider router={router} />
  )
}

export default App
