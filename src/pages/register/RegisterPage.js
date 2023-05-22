import { useState } from 'react';
import './RegisterPage.css'






function RegisterPage() {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [Nome, setNome] = useState("")
const [Sobrenome, setSobrenome] = useState("")
const [Document, setDocument] = useState("")






  return (
    
    <div className= "container">
      
      <div className="container-register">
      
        <div className="wrap-register">
          <form className="register-form">
            <span className="register-form-title">Cadastre-se</span>
            
            

            <div className="wrap-register-input">
              <input 
              className={Nome !== "" ? 'has-val input' : 'input'}
              type="Nome"
              value={Nome}
              onChange={e => setNome(e.target.value)}
               />
              <span className="focus-input" data-placeholder="First Name"></span>
            </div>

            <div className="wrap-register-input">
              <input 
              className={Sobrenome !== "" ? 'has-val input' : 'input'}
              type="Sobrenome"
              value={Sobrenome}
              onChange={e => setSobrenome(e.target.value)}
               />
              <span className="focus-input" data-placeholder="Last Name"></span>
            </div>



            <div className="wrap-register-input">
              <input 
              className={Document !== "" ? 'has-val input' : 'input'}
              type="Document"
              value={Document}
              onChange={e => setDocument(e.target.value)}
               />
              <span className="focus-input" data-placeholder="CNPJ"></span>
            </div>



            <div className="wrap-register-input">
              <input 
              className={email !== "" ? 'has-val input' : 'input'}
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
               />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>


            <div className="wrap-register-input">
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
            <div className="relembre-senha">
              <span className="txt-1">Relembrar senha</span>
            </div>
            <div className="container-register-form-btn">
              <button className="login-form-btn">Confirmar</button>
              
            </div>
            <div className="text-register-center">
              <span className="txt1">Já possui uma conta?</span>
              <a  className="txt2" href="/login"> Entre aqui</a>
              
            </div>
          </form>
         
        
        </div>
        
      </div>
      
    </div>
  );
}




export default RegisterPage;

