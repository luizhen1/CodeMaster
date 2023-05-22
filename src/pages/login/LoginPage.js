import { useState } from 'react';
import './LoginPage.css'
import loginlogo from './../../assets/login-icon.png'
import passwordlogo from './../../assets/password-icon.png'




function LoginPage() {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")






  return (
    <div className= "container">
      
      <div className="container-login">
      
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Login</span>
            <img src={loginlogo} alt="logo login"  />
            <div className="senha">
            <img src={passwordlogo} alt="logo password" />
            </div>
            <div className="wrap-input">
              <input 
              className={email !== "" ? 'has-val input' : 'input'}
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
               />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input">
              <input 
              className={password !== "" ? 'has-val input' : 'input'}
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>
            <div className="botão-quadrado">
              <button></button>
            </div>
            <div className="relembrar-senha">
              <span className="txt-1">Relembrar senha</span>
              <a  className="txt-2" href="/recover"> Esqueceu sua senha?</a>
            </div>
            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>
            <div className="text-center">
              <span className="txt1">Não possui conta?</span>
              <a  className="txt2" href="/register"> Criar conta</a>
              
            </div>
          </form>
          
        
        </div>
      </div>
    </div>
  );
}




export default LoginPage;

