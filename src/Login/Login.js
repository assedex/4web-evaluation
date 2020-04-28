import React from 'react'
import Header from "../layout/Header/Header.js"
import './Login.css';

const subtitle = "Login";



const Login = ({email, setEmail, password, setPassword, formHandler}) => 
<>
<Header subtitle={subtitle}/>
  <div className = "Login">
    
    <form className="login" onSubmit={formHandler}>
      <div>
          <label style={{'margin-left': '200px'}} for="email">Email</label>
          
          <input
            style={{'width': '348 px', 'margin-left': '200 px'}}
            value={email}
            onChange={e=> setEmail(e.target.value)}
            type="email"
            className="login__email"
            placeholder="Email"
          />
          
        </div>
        <div>
          <label style={{'margin-left': '200px'}} for="password">Password</label>
          <input
            style={{'width': '348 px', 'margin-left': '20 px'}}
            value={password}
            onChange={e=> setPassword(e.target.value)}
            type="password"
            className="login__password"
            placeholder="Password"
          />
          </div>
          <h3 className="login__error login__error--hide">
            Les identifiants que vous avez saisis sont incorrects.
          </h3>
          <button className="login__button" style={{'margin-left': '350px'}} >Connexion</button>
        </form>
  </div>
</>

export default Login