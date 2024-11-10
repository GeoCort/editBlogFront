import { useState } from "react"
import axios from "axios"
export default function Login(props){
    let defaultForm = {
        username: "",
        password: ""
    }
    const [loginForm, setLoginForm] = useState(defaultForm);
    // handle input change using state
    const handleChange = (e)=>{
        let {name, value} = e.target
        setLoginForm((preForm)=> ({...preForm, [name]:value}))
    }
    // handle Login event
    const loginAuth = async (e)=>{
        e.preventDefault()
        console.log("clicked and working")
        let response =  await axios.post(`https://backendblogapi-b563b8bcb606.herokuapp.com/api/login`, loginForm)
        if(response.status == 200){
            let token = response.data.token
            props.handleAuth(token, response.data.token)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("userId", response.data.user.id)
        }
    }
    return(
        <section>
            <form 
            onSubmit={loginAuth}
            >   
                <h2>Welcome Back. </h2>
                <div>
                <label htmlFor="username-input">Username</label>
                <input placeholder="username" type="text" name="username" id="username-input" required min={4} max={35} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password-input">Password</label>
                    <input type="password" placeholder="password" name="password" min={4} max={50} required onChange={handleChange}/>
                </div>
                <button type="submit"  >Login</button>
            </form>
        </section>
    )
}