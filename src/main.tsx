import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import { Navbar, NavbarCollapse, NavbarLink } from 'flowbite-react'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar fluid rounded>
        <NavbarCollapse>
          <NavbarLink href='/'>Home</NavbarLink>
        </NavbarCollapse>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)