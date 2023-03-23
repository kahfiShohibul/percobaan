import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Setpass.css';

function Setpass() {
    return (   
      <><Form>
        <Form.Group className="mb-3" controlId="formBasicjudulcek">
        <Form.Label className="labeljudulcekset">Set a new password</Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="labelpasswordset">Password</Form.Label>
          <Form.Control className="passwordset" type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="labelpasswordcomfirmset">Comfirm Password</Form.Label>
          <Form.Control className="passwordcomfirmset" type="password" placeholder="Password" />
        </Form.Group>
        <Button className="loginsaveset" variant="primary" type="submit">Save</Button>
      </Form>
      <img src="images/clasic2.png" position= "absolute" width = "450px" height= "350px" alt="logo mobil clasic 2" class="clasic2" className="clasic2" />
      </>
  );
}

export default Setpass