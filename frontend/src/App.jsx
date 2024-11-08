import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header.jsx'
import Sidebar from './components/main/Sidebar.jsx'
import Body from './components/main/Body.jsx'
import Login from './components/auth/Login.jsx'
function App() {
  const [auth, setAuth] = useState(false);
  useEffect( ()=>{
    if(localStorage.getItem("token")){
      setAuth(true)
    }
  })
  return (
   <> 
      {auth == true? <Body/> : <Login/>}
    </>
  )
}

export default App
