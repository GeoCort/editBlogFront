import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header.jsx'
import Sidebar from './components/main/Sidebar.jsx'
import Body from './components/main/Body.jsx'
import Login from './components/auth/Login.jsx'
function App() {
  const [token, setToken ] = useState("")
  const [userId, setUserId] = useState("")
  const [auth, setAuth] = useState(false);
  const handleAuth = (token, id)=>{
    setToken(token)
    setUserId(id)
  }
  useEffect( ()=>{
    let storageToken = localStorage.getItem("token")
    if(storageToken){
      console.log("this happened")
      setAuth(true)
      setToken(storageToken)
      setUserId(localStorage.getItem("userid"))
    }else{
      setAuth(false)
    }
  },[token])
  return (
   <> 
      {auth == true? <Body/> : <Login handleAuth={handleAuth}/>}
    </>
  )
}

export default App
