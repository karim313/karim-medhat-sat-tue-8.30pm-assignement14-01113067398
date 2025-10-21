import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar/Navbar.jsx'
import Footer from './Footer/Footer.jsx'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Portfolio from './Portfolio/Portfolio.jsx'
import Contact from './Contact/Contact.jsx'
import Layout from './Layout/Layout.jsx'
import './App.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  const myRoute = createBrowserRouter([{
    path:"/",element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'/about',element:<About/>},
      {path:'/portfolio',element:<Portfolio/>},
      {path:'/contact',element:<Contact/>},
      
    
  ],
  }
  ])
  return (
    <>
      {/* <Navbar/> */}
      {/* <About/> */}
      {/* <Home/> */}
      {/* <Portfolio/> */}
      {/* <Contact/> */}
      {/* <Footer/> */}

    <RouterProvider router={myRoute}/>
      
    </>
  )
}

export default App
