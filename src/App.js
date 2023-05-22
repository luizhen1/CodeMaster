import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import HomePage from "./pages/home/HomePage";
import RecoverPage from "./pages/recover/RecoverPage";
import NewPasswordPage from "./pages/newpassword/NewPasswordPage";
import Trailer from "./pages/trailer/TrailerPage"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";



function App() {
  return (
    
    <BrowserRouter>

    <div>
      <Header />
      {/* Conteúdo do restante do site */}
    </div>
    <Routes>
    <Route path='/trailer' element={<Trailer/>} />
    <Route path='/newpassword' element={<NewPasswordPage/>} />
    <Route path='/recover' element={<RecoverPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/' element={<HomePage/>} />
    </Routes>
    </BrowserRouter>

    /* Conteúdo do restante do site */

    
  );
}




export default App;

