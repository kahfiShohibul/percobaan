import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Forget2.css';

function Forget2() {
    return (   
      <><Form>
        <Form.Group className="mb-3" controlId="formBasicjudulcek">
        <Form.Label className="labeljudulcek2">Mohon periksa emailmu</Form.Label>
        <Form.Label className="labeljudulif2">jika tidak dapat menemukan kata sandi kirim ulang email silakan periksa kotak masuk Anda.</Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicverifikasikode">
          <Form.Label className="labelverifikasikode">Verifikasi kode</Form.Label>
          <Form.Control className="mengirimverifikasikode" type="verification" placeholder="Code" />
        </Form.Group>
        <Button className="loginkirimulangtautan" variant="primary" type="submit">Kirim ulang tautan pemulihan</Button>
        <Button className="loginverifikasikode" href="/setpass" variant="primary" type="submit">Login</Button>
      </Form>
      <img src="images/clasic2.png" position= "absolute" width = "450px" height= "350px" alt="logo mobil clasic 2" class="clasic2" className="clasic2" />
      </>
  );
}

export default Forget2