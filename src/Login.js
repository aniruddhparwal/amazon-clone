import React, { useState } from 'react'
import "./login.css"
import { Link } from "react-router-dom"
import { auth } from './firebase'
import { useHistory } from 'react-router-dom'
function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("./")
            })
            .catch(e => { alert(e.message) })
    }
    const register = e => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/")
            })
            .catch(e => { alert(e.message) })
    }
    return (
        <div className="login">
            <Link to="./">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} type="email" onChange={e => setEmail(e.target.value)} />
                    <h5>Email</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" onClick={login} className="login__signInButton">Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login__registerButton">Create Your Amazon Account </button>
            </div>
        </div>
    )
}
export default Login
