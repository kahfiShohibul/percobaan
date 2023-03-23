import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Nav } from 'react-bootstrap';
// import Forget from './components/Forget';
import './Login1.css';

function Login1() {
    return (   
      <><Form>
        <Form.Group className="mb-3" controlId="formBasicjudullogin">
        <Form.Label className="labeljudullogin">Login</Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="labelemail1">Login, email or username</Form.Label>
          <Form.Control className="email1" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="labelpassword1">Password</Form.Label>
          <Form.Control className="password1" type="password" placeholder="Password" />
        </Form.Group>
        {/* <Form.Label className="forgetpassword1">forget password?</Form.Label> */}
        <Nav.Item>
        <Nav.Link className="forgetpassword1" href="/forget">forget password?</Nav.Link>
        </Nav.Item>
        <Button className="submit1" variant="primary" type="submit">Login</Button>
      </Form>
      <img src="images/clasic1.png" position= "absolute" width = "450px" height= "350px" alt="logo mobil clasic" class="clasic1" className="clasic1" />
      <Form.Label className="labelloginwithlogin">─────────── or login with ───────────</Form.Label>
      <img src="images/google.jpg" position= "absolute" width = "42px" height= "42px" alt="logogooglelogin" class="logogooglelogin" className="logogooglelogin" />
      </>
  );
}

export default Login1