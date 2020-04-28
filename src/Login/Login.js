import React from 'react'
import Header from "../layout/Header/Header.js"
import './Login.css';

const subtitle = "Login";



const Login = ({email, setEmail, password, setPassword, formHandler}) => 
<>
<Header subtitle={subtitle}/>
  <div class = "Login">
    
    <form class="login" onSubmit={formHandler}>
          <label for="email">Login</label>
          <input
            value={email}
            onChange={e=> setEmail(e.target.value)}
            type="email"
            class="login__email"
            placeholder="Email"
          />
          <label for="password">Password</label>
          <input
            value={password}
            onChange={e=> setPassword(e.target.value)}
            type="password"
            class="login__password"
            placeholder="Password"
          />
          <h3 class="login__error login__error--hide">
            Les identifiants que vous avez saisis sont incorrects.
          </h3>
          <button class="login__button" >Submit</button>
        </form>
  </div>
</>

export default Login