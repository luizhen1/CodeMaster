import { useState } from 'react';
import './RecoverPage.css'
import { Link } from 'react-router-dom';


function RecoverPage() {
const [email, setEmail] = useState("")

  return (
    <div className= "container">
      
      <div className="container-recover">
      
        <div className="wrap-recover">
          <form className="recover-form">
            <span className="recover-form-title">Recuperar Senha</span>
            

            <div className="wrap-recover-input">
              <input 
              className={email !== "" ? 'has-val input' : 'input'}
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
               />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="container-recover-form-btn">
            <Link to="/newpassword">
        <a><button className="recover-form-btn">Confirmar</button></a>
      </Link>
              

            </div>
            
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default RecoverPage;