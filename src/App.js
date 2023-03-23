import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Login from './components/Login';
// import Database from './components/Database';
import { Routes, Route } from 'react-router-dom';
import Login1 from './components/Login1';
import Register from './components/Register';
import Forget from './components/Forget';
import Forget2 from './components/Forget2';
import Setpass from './components/Setpass';

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Login1/>}/>
            <Route path="/login" element={<Login1/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/forget" element={<Forget/>}/>
            <Route path="/forget2" element={<Forget2/>}/>
            <Route path="/setpass" element={<Setpass/>}/>
          </Routes>
        </Container>
      </main>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
