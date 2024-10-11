import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header.jsx'
import Sidebar from './components/main/Sidebar.jsx'
import Body from './components/main/Body.jsx'
function App() {

  return (
   <>
      <Header/>
      <Body/>
      <Sidebar/>
    </>
  )
}

export default App
