import logo from './logo.svg';
import './App.css';
import SignIn from './components/signIn/signIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/signUp/SignUp';
// import Header from './components/header/header';
import Form from './components/form/form';
import HomePage from './components/homePage/homePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/form' element={<Form/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
