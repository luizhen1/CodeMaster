import { useState } from 'react';
import './NewPasswordPage.css'


function NewPasswordPage() {
const [newpassword, setNewPassword] = useState("")
const [confirmnewpassword, setConfirmNewPassword] = useState("")

  return (
    <div className= "container">
      
      <div className="container-newpassword">
      
        <div className="wrap-newpassword">
          <form className="newpassword-form">
            <span className="newpassword-form-title">Crie uma nova senha</span>
            


            <div className="wrap-newpassword-input">
              <input 
              className={newpassword !== "" ? 'has-val input' : 'input'}
              type="newpassword" 
              value={newpassword}
              onChange={e => setNewPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="New Password"></span>
            </div>

            <div className="wrap-newpassword-input">
              <input 
              className={confirmnewpassword !== "" ? 'has-val input' : 'input'}
              type="confirmnewpassword" 
              value={confirmnewpassword}
              onChange={e => setConfirmNewPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Confirm New Password"></span>
            </div>

            <div className="container-newpassword-form-btn">
              <button className="newpassword-form-btn">Confirmar</button>
              

            </div>
            
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default NewPasswordPage;