import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { Mymap1 } from './Map/Map1'
import Tv from './Tv'

import './Index.css'
import Begin from './Componentss/MovieCard'
import App from './App'
import AuthContext from './Contexttttt/AuthContext'
import CartProvider from './Contexttttt/CartContext'
import Project from './geminiproject/Project'

// import See from './Manoj/See'

ReactDOM.createRoot(document.getElementById('root')).render(
 
//  <AuthContext>
//     <CartProvider>  
//       <RouterProvider router={Mymap1} />

//     </CartProvider>
//   </AuthContext>

  

  
  // <Begin/>
  <Project/>
  // <Project/>
  
)