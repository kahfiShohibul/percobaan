import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Forget.css';

function Forget() {
    return (   
      <><Form>
        <Form.Group className="mb-3" controlId="formBasicjudulcek">
        <Form.Label className="labeljudulcek">Mohon periksa emailmu</Form.Label>
        <Form.Label className="labeljudulif">jika tidak dapat menemukan kata sandi kirim ulang email silakan periksa kotak masuk Anda.</Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="labelmengirimpemulihan">Kami mengirimi Anda tautan pemulihan</Form.Label>
          <Form.Control className="mengirimpemulihan" type="email" placeholder="Enter email" />
        </Form.Group>
        <Button className="loginmengirimpemulihan" href="/forget2" variant="primary" type="submit">Login</Button>
      </Form>
      <img src="images/clasic2.png" position= "absolute" width = "450px" height= "350px" alt="logo mobil clasic 2" class="clasic2" className="clasic2" />
      </>
  );
}

export default Forget